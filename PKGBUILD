# Maintainer: Daniel Moch <daniel@danielmoch.com>
pkgname=nncli
pkgver=0.3.4
pkgrel=1
pkgdesc="NextCloud Notes Command Line Interface"
arch=('any')
url="https://nncli.org"
license=('MIT' 'BSD')
depends=('python'
         'python-urwid'
         'python-requests'
         'python-appdirs'
         'python-click')
makedepends=('python-pip' 'flit' 'python-sphinx' 'python-sphinx-sitemap')
checkdepends=('python-pytest'
              'python-pytest-cov'
              'python-pytest-mock'
              'python-pylint'
              'python-mock')
source=("https://git.danielmoch.com/${pkgname}/snapshot/${pkgname}-${pkgver}.tar.gz"{,.asc})
validpgpkeys=('72A97F7072DDCE28058DEF30323C9F1784BDDD43')
sha256sums=('d7ce489e1394bca5b7dce976184bfea331a71d7dd16486cd156297c0c0f2b832'
            'SKIP')

build()
{
  cd "${srcdir}/${pkgname}-${pkgver}"
  flit build --format wheel
  cd "${srcdir}/${pkgname}-${pkgver}/docs"
  sphinx-build -M man source build
}

check()
{
  cd "${srcdir}/${pkgname}-${pkgver}"
  python -m pytest
}

package()
{
  cd "${srcdir}/${pkgname}-${pkgver}"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm644 docs/build/man/nncli.1 "${pkgdir}/usr/share/man/man1/nncli.1"
  pip install -I --no-warn-script-location --isolated --no-deps --compile --root="${pkgdir}" dist/${pkgname}-${pkgver}-py3-none-any.whl
}

# vim: ft=PKGBUILD sts=2 sw=2 et
