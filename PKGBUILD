# Maintainer: Thomas Ellison <thomasjlsn@gmail.com>
pkgname=pw-git
pkgver=1.0
pkgrel=1
pkgdesc="A simple password manager"
arch=(any)
url="https://gitlab.com/thomasjlsn/pw"
license=('GPL3')
depends=(bash gnupg tree)
makedepends=(git make)
optdepends=()
provides=(pw)
conflicts=(pw)
source=("git+$url")
md5sums=("SKIP")

pkgver() {
    cd pw
    printf "%s.r%s.%s" "1.0" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    cd pw
    install -Dm755 pw.sh "$pkgdir/usr/bin/pw"
    install -Dm644 pw.1  "$pkgdir/usr/share/man/man1/pw.1"
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/pw/LICENSE"
    install -Dm644 completion/bash_completion "$pkgdir/usr/share/bash-completion/completions/_pw"
    install -Dm644 completion/zsh_completion "$pkgdir/usr/share/zsh/site-functions/_pw"
}
