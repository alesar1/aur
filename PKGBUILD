# Maintainer: Tim Visee <tim@visee.me>
#
# This PKGBUILD is managed externally, and is automatically updated here:
# - https://gitlab.com/timvisee/ffsend/blob/master/pkg/aur/ffsend-git/PKGBUILD
# - Mirror: https://github.com/timvisee/ffsend/blob/master/pkg/aur/ffsend-git/PKGBUILD

pkgname=ffsend-git
pkgver=0.2.43.2545708f
pkgrel=1
pkgdesc="Easily and securely share files from the command line. A Firefox Send client."
url="https://gitlab.com/timvisee/ffsend"
license=('GPL3')
source=("ffsend::git+$url.git")
sha256sums=('SKIP')
arch=('x86_64' 'i686')
provides=('ffsend')
conflicts=('ffsend')
depends=('ca-certificates')
makedepends=('openssl>=1.0' 'rust>=1.32' 'cargo' 'cmake')
optdepends=('xclip: clipboard support'
            'bash-completion: support auto completion for bash')

build() {
    cd ffsend
    env CARGO_INCREMENTAL=0 cargo build --release
}

package() {
    cd "$srcdir/ffsend"

    # Install Binary
    install -Dm755 "./target/release/ffsend" "$pkgdir/usr/bin/ffsend"

    # Install completions
    cd "./contrib/completions"
    install -Dm644 "ffsend.bash" "$pkgver/usr/share/bash-completion/completions/ffsend"
    install -Dm644 "ffsend.fish" "$pkgver/usr/share/fish/vendor_completions.d/ffsend.fish"
}
