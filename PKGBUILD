# Maintainer: evⁿ <me@cli.lol>

pkgname=sidequestlite-bin
_pkgname=sidequestlite
pkgver=0.0.2
pkgrel=1
pkgdesc="Installs Sidequest directly onto your Meta Quest 2 to easily sideload apps."
arch=('x86_64')
url="https://github.com/SideQuestVR/EasyInstallerReleases"
license=('MIT')
depends=(gtk3 libxss nss android-udev)
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("https://github.com/SideQuestVR/EasyInstallerReleases/releases/download/v${pkgver}/sidequestlite-${pkgver}.tar.xz"
        "SideQuestLite.desktop")
sha256sums=('7da9b8d2f6af98e4d91e0b6f77b589bfd190f64528836426b80eda074769e5d0'
            '9fb4cc1d09f61dcf4e7e12b29d0cc7ffe972c2fe7a0f4648a227529f222dd647')

package() {
	cd "$srcdir/sidequestlite-${pkgver}"

	install -dm755 "$pkgdir/opt/$_pkgname"
	cp -r -t "$pkgdir/opt/$_pkgname" .

	install -dm755 "$pkgdir/usr/bin"
	ln -s /opt/$_pkgname/sidequestlite "$pkgdir/usr/bin/sidequestlite"

    for res in 256x256 16x16 1024x1024 32x32 48x48 128x128 24x24 64x64 512x512
    do
        install -dm755 "${pkgdir}/usr/share/icons/hicolor/$res/apps/"
        ln -s "/opt/$_pkgname/resources/app.asar.unpacked/build/icons/$res.png" "${pkgdir}/usr/share/icons/hicolor/$res/apps/${_pkgname}.png"
    done

    install -Dm644 -t "$pkgdir/usr/share/licenses/$_pkgname" LICENSE*

    install -Dm644 "$srcdir/SideQuestLite.desktop" "${pkgdir}/usr/share/applications/SideQuestLite.desktop"
}
