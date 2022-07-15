# Maintainer: Audun-Marius Gangstø <audun@gangsto.org>
pkgname=esa-snap-bin
pkgver=9.0.0
pkgrel=1
pkgdesc="ESA SNAP Toolbox for Sentinel Satellite  data"
arch=("x86_64")
url="http://step.esa.int/main/"
license=('GPL3')
options=("!strip")
provides=("esa-snap")
depends=("java-runtime=8")
source=("https://download.esa.int/step/snap/${pkgver:0:3}/installers/${pkgname/-bin/}_all_unix_${pkgver//./_}.sh"
	"snap-conf-optimiser.desktop"
	"snap-desktop.desktop"
	"response.varfile"
        )
noextract=("${pkgname/-bin/}_all_unix_${pkgver//./_}.sh")
md5sums=("d7db246ed952832261b4bdae98a03246"
         "cc4814b417fba1c6ce2782654b18d8b8"
         "b30e02a81cce3370eb9e04ce4caee040"
         "171e808a3ba22fb6a522aa318a8703db"
)
sha256sums=("ad6ef8c679c80c58660fe23ab5fb4974f9cd3ff4b119ad8e7e40dc79dbe03896"
            "bc705ce50143ee597485f1dbbef0e62794c62af781c4af71db2f304b34c7ee01"
            "8d07671f6e94250ac333a34f1c8288f09e89428cbe9bf9c2af4a5226182cc2f9"
            "97f680aec00cc74ec2f202aba1e0132c461d631d705203ab613371c9c4c28f2d"
)


package() {
	cd "$srcdir"
	install -d "${pkgdir}/opt/"
	install -d "${pkgdir}/usr/bin"
	install -d "${pkgdir}/usr/share/icons"
	install -d "${pkgdir}/usr/share/applications"
	
	# java.util.prefs.userRoot is set to silence some warnings during install. We have to delete it afterwards
	sh "${pkgname/-bin/}_all_unix_${pkgver//./_}.sh" -q -dir "${pkgdir}/opt/snap" -J-Djava.util.prefs.userRoot="${pkgdir}/" -Vsys.symlinkDir=${pkgdir}/usr/bin

	
	install -Dm 644 "${srcdir}"/snap-desktop.desktop "${pkgdir}"/usr/share/applications
	install -Dm 644 "${srcdir}"/snap-conf-optimiser.desktop "${pkgdir}"/usr/share/applications

	cp "${pkgdir}"/opt/snap/.install4j/i4j_extf_5_1buu1c8.jpg "${pkgdir}"/usr/share/icons/esa-snap-desktop.jpg
	# This icon file is somehow truncated.
	cp "${pkgdir}"/opt/snap/.install4j/i4j_extf_3_1buu1c8.jpg "${pkgdir}"/opt/snap/bin/SNAP_icon_48.jpg
	cp "${pkgdir}"/opt/snap/.install4j/snap-conf-optimiser.png "${pkgdir}"/usr/share/icons/snap-conf-optimiser.png
	# Set -Xmx to two thirds of system memory. Seems to be what the installer does.
	maxmem="$(awk '/MemTotal/{print int(($2/1024^2) * .7)}' /proc/meminfo)"
	sed "s/-Xmx[^ ]*/-Xmx${maxmem}G/;s#^jdkhome.*#jdkhome=\"/usr/lib/jvm/java-8-openjdk/jre/\"#" -i "${pkgdir}"/opt/snap/etc/snap.conf


	# Deleting java user root and uninstaller, both related to the uninstaller.
	# Also removing the accompanying jre. 
	rm -rf "${pkgdir}"/.java "${pkgdir}"/opt/snap/.install4j "${pkgdir}"/opt/snap/jre

}
