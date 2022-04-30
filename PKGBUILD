# Maintainer: Guy Boldon <gb@guyboldon.com>

pkgname=coolero
_app_id="org.$pkgname.Coolero"
pkgver=0.10.0
pkgrel=1
pkgdesc="A program to monitor and control your cooling devices"
arch=('any')
url="https://gitlab.com/codifryed/coolero"
license=('GPL3')
depends=('hicolor-icon-theme' 'polkit' 'python' 'liquidctl' 'pyside6' 'qt6-svg' 'python-apscheduler'
         'python-matplotlib' 'python-numpy' 'python-psutil' 'python-setproctitle' 'python-jeepney'
         'python-pyamdgpuinfo')
makedepends=('python-build' 'python-installer' 'python-poetry')
checkdepends=('appstream-glib' 'desktop-file-utils')
optdepends=('nvidia-utils: NVIDIA GPU support')
provides=("$pkgname")
conflicts=("$pkgname")
source=("https://gitlab.com/codifryed/coolero/-/archive/$pkgver/$pkgname-$pkgver.tar.gz")
sha256sums=('9d03b7b6bce6e164704adaf6072c26d91bf56a3ab123c819b1eba7a20387cb42')

build() {
  cd "$pkgname-$pkgver"
  python -m build --wheel --no-isolation
}

check() {
  cd "$pkgname-$pkgver"
  desktop-file-validate "metadata/$_app_id.desktop"
  appstream-util validate-relax "metadata/$_app_id.metainfo.xml"
  python -m coolero -v
}

package() {
  cd "$pkgname-$pkgver"
  python -m installer --destdir="$pkgdir" dist/*.whl

  # Remove duplicate license files
  local site_packages=$(python -c "import site; print(site.getsitepackages()[0])")
  rm "${pkgdir}${site_packages}/$pkgname-$pkgver.dist-info"/{COPYING.txt,LICENSE}

  install -Dm644 "metadata/$_app_id.desktop" -t "$pkgdir/usr/share/applications/"
  install -Dm644 "metadata/$_app_id.metainfo.xml" -t "$pkgdir/usr/share/metainfo/"
  install -Dm644 "metadata/$_app_id.png" -t "$pkgdir/usr/share/pixmaps/"
  install -Dm644 "metadata/$_app_id.svg" -t "$pkgdir/usr/share/icons/hicolor/scalable/apps/"
}
