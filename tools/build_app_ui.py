"""Generate the Android web-interface manifest from the website files."""

import argparse
import hashlib
import json
import re
from pathlib import Path


CORE_FILES = ("index.html", "style.css", "script.js")
ASSET_REFERENCE = re.compile(
    r"assets/[A-Za-z0-9_./-]+\.(?:avif|gif|jpe?g|png|svg|webp|woff2?)",
    re.IGNORECASE,
)


def build_manifest(root):
    files = {name: (root / name).read_bytes() for name in CORE_FILES}
    references = {
        match.group()
        for content in files.values()
        for match in ASSET_REFERENCE.finditer(content.decode("utf-8"))
    }
    for name in references:
        if ".." in name or "//" in name:
            raise ValueError(f"Unsupported interface asset path: {name}")
        path = (root / name).resolve()
        if not path.is_relative_to(root / "assets"):
            raise ValueError(f"Interface asset is outside assets/: {name}")
        files[name] = path.read_bytes()

    hashes = {name: hashlib.sha256(content).hexdigest() for name, content in files.items()}
    revision = json.dumps(hashes, sort_keys=True, separators=(",", ":")).encode("utf-8")
    return {"schema": 1, "version": hashlib.sha256(revision).hexdigest(), "files": hashes}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parents[1])
    root = parser.parse_args().root.resolve()
    manifest = build_manifest(root)
    (root / "app-ui.json").write_bytes(
        (json.dumps(manifest, indent=2, sort_keys=True) + "\n").encode("utf-8")
    )
    print(f"Interface {manifest['version'][:12]} generated for {len(manifest['files'])} files.")


if __name__ == "__main__":
    main()
