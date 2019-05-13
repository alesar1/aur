# Maintainer: Jordan Day <jordanday 4 4 4 at gmail dot com>
# Contributor: Jeff Cook <jeff@deserettechnology.com>
# Contributor: Michael Asher < michael at we solve every thing dot com >
# Contributor: William Díaz <wdiaz@archlinux.us>
# Contributor: adminempier <jl@adminempire.com>
### I AM ONLY THE PACKAGER, NOT THE DEVELOPER
### Please ask support questions about this software in one of:
###   1) The AUR comments; OR
###   2) Upstream forums/maillist etc; OR
###   3) The ArchLinux forums
### I do not always know enough about the software itself, or don't have the
### time to promptly respond to direct emails.
### If you have found a problem with the package/PKGBUILD (as opposed to
### the software) then please do email me or post an AUR comment.

pkgname=uuid
_pkgname=ossp-uuid
pkgver=1.6.2
pkgrel=17
pkgdesc="OSSP Universally Unique Identifier"
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url="http://www.ossp.org/pkg/lib/uuid"
license=('MIT')
depends=('sh' 'git')
options=('!libtool')
source=("git+https://github.com/sean-/ossp-uuid.git"
	"https://src.fedoraproject.org/rpms/uuid/raw/master/f/uuid-aarch64.patch"
        ossp.patch)
sha512sums=('SKIP'
    '534ade47bf17531108d96c46bfc489b9fd4b1e7a66fcd903c8036210bdc6e631d591d04184e37b56c64ee74c05af799971d47d4cf30b25b45e05413319ae2f34'
    '36d0ea6088c12a5e382c3098f11214b202e96f91e4efd5cac567d5a81e836f78eeb654f051c576a211ec2dd5337b1f0a20d4246e84a0842fce22ae5fa96e5be9'
)

build() {
  cd "${srcdir}/${_pkgname}"
  # Rename because conflicts with util-linux
  patch -p1 -i "${srcdir}"/ossp.patch
  patch -p1 -i "${srcdir}"/uuid-aarch64.patch
  ./configure --prefix=/usr --with-perl
  make
}

package() {
  cd "${_pkgname}"
  make DESTDIR="${pkgdir}" install
  install -Dm644 README  "${pkgdir}"/usr/share/licenses/"${pkgname}"/LICENSE
}
