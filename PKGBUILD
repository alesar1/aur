# Maintainer: Michael Straube <straubem@gmx.de>
# Contributor: feuri <padfoot at exemail dot com dot au>
# Contributor: feuri <mail at feuri dot de>

pkgname=python-pysdl2
pkgver=0.9.5
pkgrel=2
pkgdesc="A Python wrapper around the SDL2 library"
arch=('any')
url="https://bitbucket.org/marcusva/py-sdl2/overview"
license=('custom:CC0')
depends=('python' 'sdl2')
optdepends=('sdl2_gfx' 'sdl2_image' 'sdl2_mixer' 'sdl2_ttf')
source=("https://bitbucket.org/marcusva/py-sdl2/downloads/PySDL2-$pkgver.tar.gz"{,.asc})
sha256sums=('500eeef667a12ab2790b9fbf25f24b2e1de3bdc9d0b07fd94112ad486149e276'
            'SKIP')
validpgpkeys=('8045642355B844E284606ED2F5645D06D1395E36') # Marcus von Appen

package() {
  cd PySDL2-$pkgver
  python setup.py install --root="$pkgdir"
  install -Dm644 doc/copying.rst "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
