# Maintainer: Jingrong Chen <crazyboycjr at gmail dot com>
# Maintainer: Shichao Gao <xgdgsc at gmail dot com>
pkgname=dingtalk-electron
_pkgname=${pkgname//-/_}
pkgver=2.0.13
pkgrel=2
pkgdesc="钉钉Linux版本"
arch=('x86_64')
url="https://github.com/nashaofu/dingtalk#readme"
license=('MIT')
depends=('gconf' 'libnotify' 'libappindicator-sharp' 'libxtst' 'nss' 'libxss')
source=("https://github.com/nashaofu/dingtalk/releases/download/v${pkgver}/dingtalk_${pkgver}_amd64.deb")

package() {
	tar xJvf data.tar.xz -C "${pkgdir}"
	mkdir -p "${pkgdir}"/opt/dingtalk
	mv "${pkgdir}/opt/钉钉"/* "${pkgdir}/opt/dingtalk"
	rmdir "${pkgdir}/opt/钉钉"

	sed -ine 's/^Exec=.*/Exec=\/opt\/dingtalk\/dingtalk/' "${pkgdir}"/usr/share/applications/dingtalk.desktop

	find "${pkgdir}" -type d | xargs chmod 755

	mkdir -p "${pkgdir}"/usr/local/bin/
	ln -sf /opt/dingtalk/dingtalk "${pkgdir}"/usr/local/bin/dingtalk

	find "${pkgdir}" -type f | xargs chown root:root
}

md5sums=('4996ee4d1993ff5a283832ddbe109657')
