# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=guiscrcpy-git
pkgver=4.12.0.r1317.g369c53c
pkgrel=1
pkgdesc="Open Source GUI based Android Screen Mirroring System"
arch=('any')
url="https://guiscrcpy.github.io"
license=('GPL3')
depends=('libxinerama' 'python' 'python-cairosvg' 'python-click' 'python-colorama'
         'python-coloredlogs' 'python-psutil' 'python-pynput' 'python-qtpy>=2.0.1'
         'scrcpy')
makedepends=('git' 'python-build' 'python-installer' 'python-poetry')
optdepends=('usbaudio: audio mirroring for Android <8.0'
            'sndcpy: audio mirroring for Android >=10')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('git+https://github.com/srevinsaju/guiscrcpy.git')
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/${pkgname%-git}"
  printf "%s.r%s.g%s" "$(sed -n '/version/{s/.*"\([0-9\.]*\).*"/\1/p;q}' pyproject.toml)" \
    "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/${pkgname%-git}"
  python -m build --wheel --no-isolation
}

package() {
  cd "$srcdir/${pkgname%-git}"
  python -m installer --destdir="$pkgdir" dist/*.whl

  install -Dm644 appimage/${pkgname%-git}.appdata.xml -t "$pkgdir/usr/share/metainfo/"
  install -Dm644 appimage/${pkgname%-git}.desktop -t "$pkgdir/usr/share/applications/"
  install -Dm644 appimage/${pkgname%-git}.png -t "$pkgdir/usr/share/pixmaps/"
}
