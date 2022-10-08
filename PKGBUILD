# Maintainer: ZhangHua<zhanghua.00@qq.com>

pkgname=aria2cd
pkgver=1.2
pkgrel=5
pkgdesc="A systemd Service to start aria2 automatically."
arch=(any)
url="https://aur.archlinux.org/packages/aria2cd"
license=(custom:WTFPL)
depends=(aria2 systemd)
optdepends=(
	'curl: for getting tracker list')
source=(
	tracker-config.sh
	update-aria2-tracker
	notify-user
	${pkgname}.hook
	aria2.conf
	aria2@.service
	LICENSE::http://www.wtfpl.net/txt/copying
)
sha256sums=('85f465f6f32a1713f65c389b57f81d26cecfb1e7baf06c38f6b9477818fc4f85'
            'b83e17eccd9d93f46e63622e479782b63ab142d816617d5b1dffe0baa66d4f1d'
            'e2681210dfe47a869191909a5569911be89cde4de6cbfb1ab1b8ff105c778112'
            '79e7fad888a53769776f691d3ce14bd29fc617bb58267304a9b04aa6ccbf4cf5'
            'd3dc278eeddbc910c775124bf474aa2c68b7bbba30226f6322ffc2c457785d27'
            '1ee51459337fafc9767734d1274cedbc1d5bf5c3092c98040235b7360a9b5925'
            '0356258391e190dc1d44ea01565cfe627fe44e27dad693a0a54c2483a7b223e5')
package(){
	mkdir -p "${pkgdir}/usr/share/aria2"
	touch "${pkgdir}/usr/share/aria2/dht.dat"
	touch "${pkgdir}/usr/share/aria2/dht6.dat"
	touch "${pkgdir}/usr/share/aria2/aria2.session"
	install -Dm644 "${srcdir}/aria2.conf" "${pkgdir}/usr/share/aria2/aria2.conf"
	install -Dm644 "${srcdir}/tracker-config.sh" "${pkgdir}/usr/share/aria2/tracker-config.sh"
	install -Dm644 "${srcdir}/aria2@.service" "${pkgdir}/usr/lib/systemd/system/aria2@.service"
	install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	install -Dm644 "${srcdir}/${pkgname}.hook" "${pkgdir}/usr/share/libalpm/hooks/${pkgname}.hook"
	install -Dm755 "${srcdir}/notify-user" "${pkgdir}/usr/share/libalpm/scripts/notify-user"
	install -Dm755 "${srcdir}/update-aria2-tracker" "${pkgdir}/usr/bin/update-aria2-tracker"
}
