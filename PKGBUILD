# Maintainer: Hexchain Tong <i@hexchain.org>
pkgname=git-credential-gnome-keyring
pkgver=2.10.1
pkgrel=1
pkgdesc="Git credential helper using GNOME Keyring"
arch=(i686 x86_64)
url="https://github.com/git/git/tree/master/contrib/credential/gnome-keyring"
license=('GPL')
depends=('git' 'libgnome-keyring')
makedepends=('git')
source=("https://www.kernel.org/pub/software/scm/git/git-$pkgver.tar.xz"
        "https://www.kernel.org/pub/software/scm/git/git-$pkgver.tar.sign")
validpgpkeys=('96E07AF25771955980DAD10020D04E5A713660A7') # Junio C Hamano

build() {
    cd "$srcdir/git-$pkgver/contrib/credential/gnome-keyring"
    make
}

package() {
    cd "$srcdir/git-$pkgver/contrib/credential/gnome-keyring"
    install -Dm755 git-credential-gnome-keyring -t "$pkgdir/usr/bin"
}
sha256sums=('a9c32df9061cfc2c194ecaa0357ba273c1f24a0dbf0d856b03dcedafcd0a4dc6'
            'SKIP')
