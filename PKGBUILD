# Maintainer: Jan Dvorak <(firstname).(lastname) @ dvorak-sw.com>
pkgname=memopal
pkgver=3.6.3
pkgrel=1
pkgdesc="Online backup, storage, synchronization and file sharing tool, all-in-one."
arch=('x86_64')
url="https://www.memopal.com"
license=('custom')
depends=('ca-certificates' 'curl>=7.64.0' 'gcc-libs>=8.3.0' 'glibc>=2.28' 'openssl>=1.1.1' 'zlib')
backup=('etc/memopal.conf')
source=('LICENSE'
        "${pkgname}.service"
        "${pkgname}-${pkgver}-amd64.deb::https://packages.memopal.com/deb/pool/non-free/m/memopal/${pkgname}_${pkgver}-deb10_amd64.deb")
sha512sums=('8c5517d93ed1281d62bc550595303849abc10f59ab84399a8207a87a38a6ac7a7280bf6564e9b1dbad92ebfe12b4366b5b58515d19aa5e534558611c02d2fec2'
	'cded6a4ae073b9586c1e071427e840269ddf2cefe3c59af141755b2e6997ed5b86a7c5c253f121a6fdee21706f4bac658bec3c6c90c193e4bf7597fd8ab3e97e'
	'a1c80f893d46564c6266ce8d70b8a97cf1f52a9fe729556c271e1b9bcc14c8650110145af236a8a759318ef57c2b8e6d972bb0d294b52ab7aba9c936c4b59215')
package() {
        # Extract package data, sysvinit related files not extracted
        cd ${srcdir}
        tar xf data.tar.xz -C "${pkgdir}" --exclude='etc/init.d' --exclude='*.gitkeep'

        # Fix memopal.conf settings
        sed -i 's#caCertPath=/etc/ssl/certs/ca-certificates.crt#caCertPath=/etc/ca-certificates/extracted/ca-bundle.trust.crt#g' "${pkgdir}"/etc/${pkgname}.conf
        sed -i 's#pidFilePath=/var/run/memopal.pid#pidFilePath=/run/memopal.pid#g' "${pkgdir}"/etc/${pkgname}.conf
        chmod 644 "${pkgdir}/etc/${pkgname}.conf"

        # Install license file
        # https://www.memopal.com/terms-of-use/
        install -Dm 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

        # Install systemd service
        install -Dm 644 "${pkgname}.service" "${pkgdir}/usr/lib/systemd/system/${pkgname}.service"

	# Fix permissions
        chown root:root -R "${pkgdir}"
        chmod -R go-w "${pkgdir}"
	chmod -R 644 "${pkgdir}/usr/share/icons/"
}
