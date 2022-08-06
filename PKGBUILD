# Maintainer: Lukasz Pozarlik <lpozarlik@gmail.com>
# Contributor: Carl George < arch at cgtx dot us >
# Contributor: Duy Truong <jimreynold2nd@yahoo.com>
# Contributor: Vyacheslav Konovalov <vyachkonovalov@protonmail.com>


pkgname='python-jira'
pkgdesc='Python library to work with Jira APIs'
pkgver='3.3.1'
pkgrel=1
url='https://github.com/pycontribs/jira'
license=('BSD')
arch=('any')
depends=('python-defusedxml'
         'python-keyring'
         'python-requests'
         'python-requests-oauthlib'
         'python-requests-toolbelt')
optdepends=("ipython")
makedepends=('python-setuptools')
source=("https://github.com/pycontribs/jira/archive/refs/tags/$pkgver.tar.gz"
        "version.patch")
sha256sums=('fe8f62fe7491a50f745696444f2b6eeaffbdf574506ed4a5ec0e111316e69926'
            'd77b1bbc6b27a1d100bf4362ada5ef6bf887cc2b25f8fd72d8d169a354cdf9a4')


prepare() {
  cd "${srcdir}/jira-${pkgver}"
  patch --forward --strip=1 --input="${srcdir}/version.patch"
}

package() {
  cd "${srcdir}/jira-${pkgver}"
  python setup.py install --root="$pkgdir" --optimize=1
  install -Dm 644 -t "$pkgdir/usr/share/licenses/$pkgname" LICENSE
  rm -rf "$pkgdir/usr/lib/python3.10/site-packages/tests"
}
