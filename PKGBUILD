# Maintainer: Martin Diehl <aur@martin-diehl.net>
pkgname=dream3d
pkgver=6.5.150
pkgrel=1
pkgdesc='Analysis tool for microstructure data'
arch=('x86_64')
url='https://dream3d.bluequartz.net'
license=('custom: DREAM.3D License')
depends=('libpng15')
source=(http://dream3d.bluequartz.net/binaries/DREAM3D-${pkgver}-Linux-x86_64.tar.gz
        dream3d.desktop)
sha256sums=('ed1af070f5a520ac2ca183bfcd803a2d4624a30877c57689f9bdd3a2fd1c644e'
            '1b920026ee87b3fdd7484292a1f151b260b9f36712346a2800f3a510dae99de4')
package() {

  install -Dm644 "$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"

  cd $srcdir

  mkdir -p "$pkgdir/usr/bin"
  mkdir -p "$pkgdir/opt/dream3d"
  mkdir -p "$pkgdir/usr/share/licenses/$pkgname/"

  cp -r  DREAM3D-${pkgver}-Linux-x86_64/*        $pkgdir/opt/dream3d/

  ln -s /opt/dream3d/bin/DREAM3D                 $pkgdir/usr/bin/
  ln -s /opt/dream3d/bin/PipelineRunner          $pkgdir/usr/bin/

  install -Dm644 DREAM3D-${pkgver}-Linux-x86_64/*.txt $pkgdir/usr/share/licenses/$pkgname/
}
