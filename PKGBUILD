# Maintainer: J. Nathanael Philipp <nathanael@philipp.land>
pkgname=backup
pkgver=0.4.0
pkgrel=1
pkgdesc="Python wrapper for rsync"
arch=("any")
url="https://github.com/jnphilipp/backup"
license=("GPL3+")
makedepends=("git" "help2man")
depends=("python" "python-lxml" "rsync")
optdepends=("python-notify2: Desktop notifications")
source=("git://github.com/jnphilipp/backup.git")
md5sums=(SKIP)

package() {
    cd "$srcdir/$pkgname"
    git checkout $pkgver
    make clean
    make install DEST_DIR=$pkgdir BASH_COMPLETION_DIR=/etc/bash_completion.d
}
