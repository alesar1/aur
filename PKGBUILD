# Maintainer: Agnibho Mondal <contact at agnibho dot com>
pkgname=imagecap
pkgver=1.0
pkgrel=1
epoch=
pkgdesc="A shell script to add captions to images"
arch=('any')
url="https://code.agnibho.com/imagecap"
license=('GPL')
groups=()
depends=('bash' 'coreutils' 'gvim' 'sed' 'perl-image-exiftool' 'feh')
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("https://code.agnibho.com/imagecap/download/$pkgname-$pkgver.tar.gz")
noextract=()
md5sums=(42fb17695ae8cd6af4d997b62d463966)
validpgpkeys=()

package() {
	cd "$pkgname"
	make DESTDIR="$pkgdir/" prefix="/usr" install
}
