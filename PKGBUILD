# Maintainer: KokaKiwi <kokakiwi+aur@kokakiwi.net>

_commitref='d10ff033ec7ef8bda7a76f43b7ee82875c7c9782'

_pkgname=criticality-score
pkgname="python-${_pkgname}"
pkgver=1.0.7
pkgrel=1
pkgdesc="Gives criticality score for an open source project"
arch=('any')
url="https://pypi.org/project/${_pkgname}"
license=('Apache')
depends=('python')
makedepends=('python-setuptools')
source=("${pkgname}-${pkgver}.tar.gz::https://pypi.org/packages/source/${_pkgname:0:1}/${_pkgname//-/_}/${_pkgname//-/_}-${pkgver}.tar.gz"
        "https://raw.githubusercontent.com/ossf/criticality_score/${_commitref}/LICENSE")
sha256sums=('a81b1696654443ae24d4465714525b93818db8cdbc019e831cffa078840a0145'
            '669649bdd4097a659e5e952b2bcaafc4693c5124e399adc2522dbc7e5865ab26')
b2sums=('91af06cd20a1dd79b6569af3b5697c7e20fd9f9ad91349efa2b3dd6478cf4138bd5aab6cd5b3783508bbf1809ad26f42b2883899683015647453a5b3ef994082'
        '9d6391e0d3fdcd9c5587893f27c9ddd2a817260ff8dfe685c137ba97ac514029d1a1babd20bed5ea057161c819aed7503eb155d984c4fa9669b81b38cfc96408')

build() {
  cd "${_pkgname//-/_}-${pkgver}"

  python setup.py build
}

package() {
  cd "${_pkgname//-/_}-${pkgver}"

  python setup.py install --root="${pkgdir}" --optimize=1
  find "${pkgdir}/usr/lib/python"*"/site-packages" -type f -exec chmod 0644 {} \;

  install -Dm0644 ../LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
