pkgname=python-briar-wrapper
conflicts=('python-briar-wrapper-git')
pkgver=0.0.6
pkgrel=1
pkgdesc='A wrapper for the Briar headless API.'
arch=('any')
url='https://code.briarproject.org/briar/python-briar-wrapper'
license=('GNU Affero GPL')
makedepends=('python-setuptools' 'python-dephell' 'git')
depends=('python' 'python-websockets' 'python-requests' 'briar-headless')
source=("git+https://code.briarproject.org/briar/python-briar-wrapper.git#tag=${pkgver}"
        'address_error.patch')
sha256sums=('SKIP'
            'dff2e1645420e76c543065d3bedcfe17fc4669bb01627f6ba43a66c225b52f18')

prepare() {
  cd "${pkgname}"
  dephell deps convert --prereleases  --from pyproject.toml --to setup.py
  sed -E 's/packages=\[.*/packages=\["briar_wrapper", "briar_wrapper.models"\],/' -i setup.py

  # fix uncaught OSError / 'Cannot assign requested address' while waiting for briar-headless to come up
  patch -Np1 -i ../address_error.patch
}

build() {
  cd "${srcdir}/${pkgname}"

  python setup.py build
}

package() {
  cd "${srcdir}/${pkgname}"

  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}
