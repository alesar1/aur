# Maintainer: Mort Yao <soi@mort.ninja>
# Contributor: Kory Woods <kory _at_ virlo >dot< net>
# Contributor: Aleix Pol <aleixpol@kde.org>

pkgname=miranda
_pkgname=miranda
pkgver=2.042
pkgrel=1
pkgdesc="Miranda"
url="http://miranda.org.uk/"
arch=('i686', 'x86_64')
license=('custom')
depends=()
makedepends=('pkgconfig' 'wget' 'tar')
# conflicts('')
provides=('miranda')

source=()
md5sums=()

_name=mira-2042-i686-Linux.tgz

build() {
  cd $srcdir
  wget http://www.cs.kent.ac.uk/people/staff/dat/ccount/click.php?id=2 -O $_name
  tar xzvf $_name -C $pkgdir
}
