# Maintainer: Hao Long <aur@esd.cc>
# Contributor: Leo Mao <leomaoyw at gmail dot com>

pkgname=python-gym
_pkgname=gym
pkgver=0.25.2
pkgrel=1
pkgdesc="A toolkit for developing and comparing reinforcement learning algorithms."
arch=('any')
url="https://gym.openai.com/"
license=('MIT')
depends=('python-scipy' 'python-numpy' 'python-six' 'python-pyglet' 'python-cloudpickle')
optdepends=('python-ale-py' 'python-pillow' 'python-opengl')
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_pkgname::1}/${_pkgname}/${_pkgname}-${pkgver}.tar.gz"
        "LICENSE-${pkgver}.md::https://raw.githubusercontent.com/openai/gym/${pkgver}/LICENSE.md")
b2sums=('d366ff6b5c6c684b2355464e5561d3cd9ef4fda493e12d9bd78f8daa653763f07ddb3c305acccde1132e6f2516f40054b6f6c327eccce95ca16019f83393b538'
        '26bc4de9e957160dbc9d218a8bf7304cd64ebe6c3037b171ee2657424a76279f27438598e48a476ed625be129310fa12b0b084ea2ddf92156f9522458e999c7b')

build() {
  cd ${_pkgname}-${pkgver}
  python setup.py build
}

package() {
  cd ${_pkgname}-${pkgver}
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
  install -Dm644 ${srcdir}/LICENSE-${pkgver}.md "$pkgdir/usr/share/licenses/${pkgname}/LICENSE.md"
}
