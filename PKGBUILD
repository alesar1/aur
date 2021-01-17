# Maintainer: Felix Yan <felixonmars@archlinux.org>
# Maintainer: Chih-Hsuan Yen <yan12125@archlinux.org>

pkgname=nvchecker
pkgver=1.7
pkgrel=1
pkgdesc="New version checker for software releases"
arch=('any')
url="https://github.com/lilydjwg/nvchecker"
license=('MIT')
depends=('python' 'python-setuptools' 'python-structlog' 'python-tornado' 'python-pycurl')
checkdepends=('python-pytest' 'python-pytest-asyncio' 'python-pytest-httpbin' 'python-flaky' 'git' 'mercurial')
optdepends=(
  'pyalpm: allow using "sort_version_key = vercmp" in configuration files'
  'bzr: for VCS sources'
  'git: for VCS sources'
  'mercurial: for VCS sources'
  'subversion: for VCS sources'
)
source=("$pkgname-$pkgver.tar.gz::https://github.com/lilydjwg/nvchecker/archive/v$pkgver/$pkgname-$pkgver.tar.gz")
sha512sums=('6243960747de33bd004bb3377109699f702bb64d65320e0c219f540546f33ace2d87be4eb2b18d988874eb98812176488fa5c98aec6f93cd218b8549b38482d0')

build() {
  cd nvchecker-$pkgver
  python setup.py build
}

check() {
  cd nvchecker-$pkgver
  pytest
}

package() {
  cd nvchecker-$pkgver
  # use PYTHONHASHSEED=0 work around https://bugs.python.org/issue34722
  PYTHONHASHSEED=0 python setup.py install --root="$pkgdir" --optimize=1 --skip-build
  install -Dm644 LICENSE -t "$pkgdir"/usr/share/licenses/$pkgname
}

# vim:set ts=2 sw=2 et:
