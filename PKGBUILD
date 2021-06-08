# Maintainer: Wojciech Kępka (wojciech@wkepka.dev) 
pkgname=helix
pkgver=0.0.10
pkgrel=1
pkgdesc="A text editor written in rust"
url="https://helix-editor.com"
arch=(x86_64)
makedepends=("cargo" "rust" "git")
depends=()
provides=("hx")
source=("git+https://github.com/helix-editor/helix.git")
sha256sums=('SKIP')

prepare() {
	cat > "hx" << EOF
#!/usr/bin/env sh
HELIX_RUNTIME=/usr/lib/helix/runtime exec /usr/lib/helix/hx "\$@"
EOF
	chmod +x "hx"

	cd helix
    git checkout tags/v$pkgver -b master
	git submodule update --recursive --recommend-shallow --init
}

build() {
	cd helix
	cargo build --release	
}

check() {
	cd helix
	cargo test --all-features
}

package() {
	cd helix
	mkdir -p "$pkgdir/usr/lib/helix/"
	cp -r "runtime" "$pkgdir/usr/lib/helix/"
	install -Dm 0777 "target/release/hx" "$pkgdir/usr/lib/helix/hx"
	install -Dm 0444 "LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	install -Dm 0777 "$srcdir/hx" "$pkgdir/usr/bin/hx"
}
