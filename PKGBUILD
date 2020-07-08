# Maintainer: Iyán Méndez Veiga <me (at) iyanmv (dot) com>
# Contributor: Kyle Sferrazza <kyle.sferrazza@gmail.com>
# Contriubutor: robertfoster

pkgname=python-wifiphisher-git
_pkgname=wifiphisher
pkgver=r787.f0be783
pkgrel=1
pkgdesc='Fast automated phishing attacks against WPA networks.'
arch=('any')
url='https://github.com/sophron/wifiphisher'
license=('MIT')
depends=('python'
         'python-httplib2'
         'python-scapy'
         'aircrack-ng'
         'python-pyopenssl'
         'python-pyric'
         'python-blessings'
         'python-pbkdf2'
         'python-tornado'
         'hostapd'
         'dnsmasq'
         'python-dbus'
         'python-roguehostapd-git')
makedepends=('git' 'python-setuptools')
provides=('wifiphisher')
conflicts=('wifiphisher' 'wifiphisher-git')
source=('git+https://github.com/sophron/wifiphisher.git')
sha512sums=('SKIP')

pkgver() {
  cd "${srcdir}/${_pkgname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "${srcdir}/${_pkgname}"
	python setup.py build
}

package() {
  cd "${srcdir}/${_pkgname}"
  python setup.py install --root="${pkgdir}/" --optimize=1 --skip-build
  install -Dm 644 -t "$pkgdir/usr/share/doc/$_pkgname/" *.md
  install -Dm 644 LICENSE.txt "$pkgdir/usr/share/licenses/$_pkgname/LICENSE"
}
