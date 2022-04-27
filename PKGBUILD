# Maintainer: Julian Schmidhuber <aur at schmiddi dot anonaddy dot com>
pkgname=tubefeeder
pkgver=1.6.6
pkgrel=1
pkgdesc="A Youtube, Lbry and Peertube client made for the Pinephone"
arch=('x86_64' 'aarch64')
url="https://www.tubefeeder.de"
license=('GPL')
groups=()
depends=('libadwaita')
optdepends=('mpv: Play the videos', 'youtube-dl: Play and download the videos')
makedepends=('cargo')
provides=("${pkgname}")
conflicts=("${pkgname}")
replaces=()
backup=()
options=()
install=
source=("$pkgname.tar.gz::https://github.com/Schmiddiii/Tubefeeder/archive/refs/tags/v$pkgver.tar.gz")
noextract=()
md5sums=('1ac142037f2044b93496026785821f5f')

prepare() {
	cd "$srcdir/Tubefeeder-${pkgver}"
        cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}

build() {
	cd "$srcdir/Tubefeeder-${pkgver}"
        export RUSTUP_TOOLCHAIN=stable
        export CARGO_TARGET_DIR=target
        cargo build --frozen --release --all-features
}

package() {
	cd "$srcdir/Tubefeeder-${pkgver}"
        # Binary
        install -Dm0755 -t "$pkgdir/usr/bin/" "target/release/tubefeeder"
        # Desktop-file
        install -D packaging/tubefeeder.desktop $pkgdir/usr/share/applications/de.schmidhuberj.tubefeeder.desktop
        # Icon
        install -D packaging/tubefeeder.png $pkgdir/usr/share/icons/hicolor/512x512/apps/de.schmidhuberj.tubefeeder.png

        # Localization
        ls -ld po/locale/*/ | sed 's|.*po/locale/||' | xargs -I % install -D "po/locale/%LC_MESSAGES/de.schmidhuberj.tubefeeder.mo" "$pkgdir/usr/share/locale/%LC_MESSAGES/de.schmidhuberj.tubefeeder.mo"
}
