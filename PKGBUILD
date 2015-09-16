# Maintainer: John Jenkins <twodopeshaggy@gmail.com>

pkgname=python2-tweepy-git
pkgver=0.983.954b2f4
pkgrel=1
pkgdesc="A Python library for accessing the entire Twitter API"
arch=('any')
url="https://github.com/tweepy/tweepy"
license=('MIT')
conflicts=('python2-tweepy')
depends=('python2-requests' 'python2-requests-oauthlib' 'python2-six')
makedepends=(
  'python-setuptools' 'python-pip' 'python2-setuptools' 'python2-pip'
  'python-requests' 'python-requests-oauthlib' 'python-six'
  'python2-requests' 'python2-requests-oauthlib' 'python2-six'
  'git'
)
source=("${pkgname%}::git+https://github.com/tweepy/tweepy")
sha256sums=('SKIP')

pkgver() {
	cd "${srcdir}"/${pkgname}
        echo "0.$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
    }

package() { 
  cd "$srcdir/$pkgname"
  python2 setup.py install -O1 --root="${pkgdir}" --prefix=/usr
  install -Dm 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
