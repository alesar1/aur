# Maintainer:  Chmouel Boudjnah <chmouel@chmouel.com>
pkgname=gnome-next-meeting-applet
pkgver=2.0.1
pkgrel=1
pkgdesc="An applet to show your next meetings from Gnome Online Accounts"
arch=('any')
url="https://github.com/chmouel/gnome-next-meeting-applet"
license=('GPL3')
depends=('python-gobject' 'python-yaml' 'python-humanize' 'libappindicator-gtk3' 'gnome-shell-extension-appindicator' 'evolution-data-server' 'evolution-data-server')
source=( https://github.com/chmouel/${pkgname}/archive/refs/tags/${pkgver}.tar.gz )
sha256sums=('25d3593e42683336f3683d4ff29abf4b5409e5d730d9da49dc1fad7eb2548292')
makedepends=("python-setuptools" "python-dephell")

prepare() {
    cd "$pkgname-$pkgver"
    dephell deps convert --from pyproject.toml --to setup.py
}

build() {
  cd "${srcdir}/$pkgname-$pkgver"
  python setup.py build
}

package() { 
  cd "${srcdir}/${pkgname}-${pkgver}"
  python setup.py -q install --root="${pkgdir}" --optimize=1
  mkdir -p ${pkgdir}/usr/share/{${pkgname},applications,icons}
  cp -a data/images ${pkgdir}/usr/share/${pkgname}/
  cp data/desktop/${pkgname}.desktop ${pkgdir}/usr/share/applications/
  cp data/desktop/icon.svg ${pkgdir}/usr/share/icons/${pkgname}.svg
}
