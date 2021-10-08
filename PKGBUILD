# Maintainer: KokaKiwi <kokakiwi+aur@kokakiwi.net>

_pkgname=parsita
pkgname="python-${_pkgname}"
pkgver=1.6.1
pkgrel=1
pkgdesc="Parser combinator library for Python."
arch=('any')
url="https://pypi.org/project/${_pkgname}"
license=('MIT')
depends=('python')
makedepends=('python-setuptools')
source=("${pkgname}-${pkgver}.tar.gz::https://pypi.org/packages/source/${_pkgname:0:1}/${_pkgname/-/_}/${_pkgname/-/_}-${pkgver}.tar.gz"
        LICENSE)
sha256sums=('6dae2b02cb172f41811419ef9600e6f81bc90378a82526595b94d8770dc92955'
            '0d9510b6afe453291bc7fecc863b17d15d9b7931c5c55e22b55b93ba6195ff70')
b2sums=('d2aa2e4baef1d9436e22bf40585710263917e7c320fb2c92276c7533c5f61c624c1f65b5b78b72c278abd2456b7847e8c0e5e229f812d309c93a6866c66c10bf'
        'b058113fdc8cbeaf79c8adbc5df46b92cd7d415d8793ccf52fb98fa2bcc668630164134ae05c0a5ac2ed4c8acf51fc7d43c2e6ec77282dc9058a1fae3819e957')

build() {
  cd "${_pkgname/-/_}-${pkgver}"

  python setup.py build
}

check() {
  cd "${_pkgname/-/_}-${pkgver}"

  export PYTHONPATH="build/lib"
  python setup.py test
}

package() {
  cd "${_pkgname/-/_}-${pkgver}"

  python setup.py install --root="${pkgdir}" --optimize=1
  install -Dm0644 ../LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
