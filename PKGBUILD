# Maintainer: robertoszek <robertoszek@robertoszek.xyz>
pkgname=python-pleroma-bot
_name=${pkgname#python-}
pkgver=0.8.5
pkgrel=1
pkgdesc="Bot for mirroring one or multiple Twitter accounts in Pleroma/Mastodon."
arch=("any")
url="https://github.com/robertoszek/$_name"
license=("MIT")
depends=("python")
makedepends=("python-setuptools")
conflicts=("${pkgname}" "${pkgname}-git")
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=("9e69a71ec08999cb629caeb1778d8173a1821fe6283ece84a26898254b400e2d")

build() {
  cd "${srcdir}/${_name}-${pkgver}"
  # python setup.py build
  python -m setuptools.launch setup.py build
}

package() {
  depends=("python-oauthlib" "python-requests-oauthlib" "python-requests" "python-pyaml")
  cd "${srcdir}/${_name}-${pkgver}"
  python setup.py install --root="${pkgdir}/" --optimize=1 || return 1
}
