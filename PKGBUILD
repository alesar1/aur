# Maintainer: Robert Cegliński <rob.ceglinski@gmail.com>

pkgname=minetest-mineclone2
pkgver=0.80.1
pkgrel=1
pkgdesc='Minecraft clone game for Minetest'
arch=('any')
url='https://git.minetest.land/MineClone2/MineClone2'
license=('GPL3')
depends=('minetest-common')
source=("mineclone2-$pkgver.tar.gz::https://git.minetest.land/MineClone2/MineClone2/archive/${pkgver}.tar.gz")
sha256sums=('2a3c60483609748380d9d4f4ef936ce5b8d6658083d5180f64508a0b049f8608')
sha512sums=('19d9858145afc32c51dcb64bc45827761882b45da3266736d01cd233df0ae63f59189c46e6c5c32fdbfa4edb8e52917fb335cb9b025fd097391246c16259e937')
b2sums=('06ef32c6df47bc9e5362d16c32b4ef9a4ae26480c8fe58dd71e1f2154dfd3de7a7f51c01e65fee879ad4451a27f32ce094385396f6ec0b3ace4295d4a50fa9cc')

package() {
  cd mineclone2

  for f in $(find . -type f); do
    install -Dm644 "$f" "$pkgdir/usr/share/minetest/games/mineclone2/$f"
  done
}
