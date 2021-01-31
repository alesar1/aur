pkgname=mitogen
pkgver=0.3.0rc1
pkgrel=1
pkgdesc="Distributed self-replicating programs in Python"
license=("BSD")
url="https://mitogen.networkgenomics.com/"
depends=('python')
makedepends=('python-setuptools')
optdepends=('ansible: for using the ansible strategy plugin')
source=("https://github.com/mitogen-hq/mitogen/archive/v${pkgver//_/-}.tar.gz")
arch=('any')

build() {
  cd "$srcdir/$pkgname-${pkgver//_/-}"
  python setup.py build
}

package() {
  cd "$srcdir/$pkgname-${pkgver//_/-}"
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

md5sums=('f7817a984beb6cfd1b0206ccfb24b1ce')
sha1sums=('a1e4c1a1efda0f2fb5b472e81c972da5ee6bc606')
sha256sums=('1788ebcd327c876004de84b852971aba7fd6b0157365423234463f3bbda2646b')
sha384sums=('03f0561696112db7de72e3b9d9fb9c3a4dee2fd0e6429873f8c3f2816e20aa15ee4bda39721322d7f1955d6c4033246b')
sha512sums=('62c4e7cce7e9354177607ff11886620dcc930eb9ca5cdf3c4b0066efc7325178e8ceb9d1aad920117d90a264776dbb527125b20b2c77ed928c516912fda6bf14')
