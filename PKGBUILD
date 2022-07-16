# Maintainer: Robert Cegliński <rob.ceglinski@gmail.com>

pkgname=minetest-mineclone2
pkgver=0.77.0
pkgrel=1
pkgdesc='Minecraft clone game for Minetest'
arch=('any')
url='https://git.minetest.land/MineClone2/MineClone2'
license=('GPL3')
depends=('minetest-common')
source=("mineclone2-$pkgver.tar.gz::https://git.minetest.land/MineClone2/MineClone2/archive/${pkgver}.tar.gz")
sha256sums=('795ee1eb9e315a10a3444c4be19b6fc21569a5962ced9dee82b0b14825d31f7a')
sha512sums=('193c6e93c485176d392d60c6f5e8a95cc91742e82dfc96bdaccd8c9c388b8b43fcee978e092779eb88ae90f6d8c641c333c4613fb78a5a284101b408e6308592')
b2sums=('7922a94f73e232c148138564e92b819e199b55c6e5ad05226bb179212640f55c50ac5514a8e7846f549bf1a9169b900720832594281e62ff1607aef951bcd2f9')

package() {
  cd mineclone2

  for f in $(find . -type f); do
    install -Dm644 "$f" "$pkgdir/usr/share/minetest/games/mineclone2/$f"
  done
}
