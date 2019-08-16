# Maintainer: tritonas00 <tritonas00@gmail.com>

pkgname=rigsofrods-bin
pkgver=0.4.8.0_RC5
pkgrel=3
pkgdesc='An open source vehicle simulator based on soft-body physics'
arch=('x86_64')
url='https://www.rigsofrods.org'
license=('GPLv3')
depends=('openal' 'nvidia-cg-toolkit' 'openjpeg2')
conflicts=('rigsofrods' 'rigsofrods-git' 'rigsofrods-noangelscript-git')
source=('http://files.rigsofrods.org/rigs-of-rods-linux-rc5.zip' 'rigsofrods-bin' 'RoR.desktop' 'rigsofrods.png')
md5sums=('a9acd5cb1380e36737359fe9c8c2812d'
         '18a93ef64b00447ebd4339673731ce05'
         'd08fa6b90c78d12de7772b15af0380a4'
         'eb771473d8e14a8814c6d1d68f25f02d')

package() {
  cd "$srcdir"
  install -dm755 "$pkgdir/opt/rigsofrods-bin"
  cp -r bin "${pkgdir}/opt/rigsofrods-bin/bin"
  cp -r lib "${pkgdir}/opt/rigsofrods-bin/lib"
  install -Dm755 rigsofrods-bin "$pkgdir/usr/bin/rigsofrods-bin"
  install -Dm755 RoR.desktop "$pkgdir/usr/share/applications/RoR.desktop"
  install -Dm755 rigsofrods.png "$pkgdir/usr/share/pixmaps/rigsofrods.png"
}
