# Maintainer: Joakim Nylén <me@jnylen.nu>
# Contributor: ahrs

pkgname=mailspring
_pkgver=1.0.9
_pkghash=c5e85dc4
pkgver=${_pkgver}.${_pkghash}
pkgrel=1
pkgdesc="A beautiful, fast and maintained fork of Nylas Mail by one of the original authors."
arch=('x86_64')
license=('GPL3')
url="https://getmailspring.com/"
options=('!strip' '!upx')

source=()
sha256sums=()
sha256sums_x86_64=('b8f428da3581aed2a4deaeaf4d4763aebcf63539cd8bce984c3dc1d4ec63c1d2')

source_x86_64=("https://mailspring-builds.s3.amazonaws.com/client/${_pkghash}/linux/mailspring-${_pkgver}-amd64.deb")
depends=("libgnome-keyring" "libtool" "c-ares" "ctemplate" "icu" "libxext" "openssl" "tidy" "libxtst" "libxkbfile" "glib2" "glibc" "libxml2" "libutil-linux" "libsecret" "gconf")

package() {
	cd ${srcdir}

	tar -xvf data.tar.xz -C ${pkgdir} --exclude='./control'

	chmod -R go-w "${pkgdir}"/usr
}
