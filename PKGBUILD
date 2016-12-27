# Maintainer: Christian Hesse <mail@eworm.de>

pkgname=openvpn-git
pkgver=2.4.rc2.r9.gf38942d1
pkgrel=1
pkgdesc='An easy-to-use, robust and highly configurable VPN (Virtual Private Network) - git checkout'
arch=('i686' 'x86_64')
url='http://openvpn.net/index.php/open-source.html'
depends=('openssl' 'lzo' 'iproute2' 'libsystemd' 'pkcs11-helper')
optdepends=('easy-rsa: easy CA and certificate handling')
makedepends=('git' 'systemd')
conflicts=('openvpn' 'openvpn-dev')
provides=('openvpn=2.4.0' 'openvpn-dev')
license=('custom')
# for 2.4.x release branch append: #branch=release/2.4
source=('git://github.com/OpenVPN/openvpn.git'
        '0001-plugin.patch'
        '0002-do-not-race-on-RuntimeDirectory.patch')
sha256sums=('SKIP'
            'b8254067b4ef5d157d87267a76938d86f101972303c7ff20131cc9f28659a30c'
            'a87b081f998db99190e8b9e185cd7aade5bd6dfb5c03777c82b75d28cd3b375c')

pkgver() {
	cd openvpn/

	if GITTAG="$(git describe --abbrev=0 --tags 2>/dev/null)"; then
		printf '%s.r%s.g%s' \
			"$(sed -e "s/^${pkgname%%-git}//" -e 's/^[-_/a-zA-Z]\+//' -e 's/[-_+]/./g' <<< ${GITTAG})" \
			"$(git rev-list --count ${GITTAG}..)" \
			"$(git log -1 --format='%h')"
	else
		printf '0.r%s.g%s' \
			"$(git rev-list --count master)" \
			"$(git log -1 --format='%h')"
	fi
}

prepare() {
	cd openvpn/

	# plugin path
	patch -Np1 < "${srcdir}"/0001-plugin.patch

        # do not race on RuntimeDirectory
        patch -Np1 < "${srcdir}"/0002-do-not-race-on-RuntimeDirectory.patch

	# regenerate configure script
	autoreconf -vi
}

build() {
	cd openvpn/

	./configure \
		--prefix=/usr \
		--sbindir=/usr/bin \
		--enable-iproute2 \
		--enable-pkcs11 \
		--enable-plugins \
		--enable-systemd \
		--enable-x509-alt-username
	 make
}

check() {
	cd openvpn/

	make check
}

package() {
	cd openvpn/

	# Install openvpn
	make DESTDIR="${pkgdir}" install

	# Create empty configuration directory
	install -d -m0750 -g 90 "${pkgdir}"/etc/openvpn/{client,server}

	# Install examples
	install -d -m0755 "${pkgdir}"/usr/share/openvpn
	cp -r sample/sample-config-files "${pkgdir}"/usr/share/openvpn/examples

	# Install license
	install -d -m0755 "${pkgdir}"/usr/share/licenses/openvpn/
	ln -sf /usr/share/doc/openvpn/{COPYING,COPYRIGHT.GPL} "${pkgdir}"/usr/share/licenses/openvpn/

	# Install contrib
	for FILE in $(find contrib -type f); do
		case "$(file --brief --mime-type "${FILE}")" in
			"text/x-shellscript") install -D -m0755 "${FILE}" "${pkgdir}/usr/share/openvpn/${FILE}" ;;
			*) install -D -m0644 "${FILE}" "${pkgdir}/usr/share/openvpn/${FILE}" ;;
		esac
	done

	# Install systemd files
	install -d -m0755 "${pkgdir}"/usr/lib/systemd/system/
	install -m0644 distro/systemd/openvpn-{client,server}@.service "${pkgdir}"/usr/lib/systemd/system/
	install -D -m0644 distro/systemd/openvpn.conf "${pkgdir}"/usr/lib/tmpfiles.d/openvpn.conf
	install -d -m0710 "${pkgdir}"/run/openvpn-{client,server}
}

