# Maintainer: Zhuoyun Wei <wzyboy@wzyboy.org>

pkgname=beancount
pkgdesc='Double-Entry Accounting from Text Files'
pkgver=2.2.3
pkgrel=2
arch=('i686' 'x86_64')
url="http://furius.ca/beancount/"
license=('GPL')
source=("https://files.pythonhosted.org/packages/source/${pkgname::1}/${pkgname}/${pkgname}-${pkgver}.tar.gz")
sha256sums=('1554adfd773d12cb88fd7f4da67fcb608665a9bdedc7e44834e059d1b3a08e5d')
depends=('python>=3.5' 'mpdecimal' 'python-dateutil' 'python-ply'
         'python-bottle' 'python-lxml' 'python-magic-ahupp' 'python-beautifulsoup4'
         'python-chardet' 'python-google-api-python-client' 'python-requests'
         'python-pytest')
conflicts=('beancount-hg')

package () {
  cd "${pkgname}-${pkgver}"
  python setup.py install --prefix=/usr --root="${pkgdir}"
}
