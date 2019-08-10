# Maintainer: Christophe LAVIE <christophe.lavie@laposte.net>

pkgbase='dynamic-wallpaper-catalina'
pkgname=("${pkgbase}-timed-gnome-git" "${pkgbase}-kde-git" "${pkgbase}-images-git" )
_gitname='gnome-kde-dynamic-wallpaper-catalina'
pkgver=1.0
pkgrel=22
arch=('any')
url="https://github.com/japamax/${_gitname}"
source=("git+https://github.com/japamax/${_gitname}")
sha256sums=('SKIP')

pkgver() {
  cd $_gitname
  git describe --tags --long | sed -r 's/^v//;s/([^-]*-g)/r\1/;s/-/./g'
}

 package_dynamic-wallpaper-catalina-images-git() {
	pkgdesc="macOS Catalina dynamic wallpaper based 8 images"
	cd "${srcdir}/${_gitname}"
	install -dm755 "${pkgdir}/usr/share/dynamicwallpapers/catalina/images"
	install -m644 ${srcdir}/${_gitname}/catalina/* "${pkgdir}/usr/share/dynamicwallpapers/catalina/images"
}

 package_dynamic-wallpaper-catalina-timed-gnome-git() {
	depends=(gnome-shell gnome-backgrounds dynamic-wallpaper-catalina-images-git)
	pkgdesc="Time based GNOME macOS Catalina wallpaper with real scheludes"
	install=dynamic-wallpaper-catalina-timed-gnome-git.install
	cd "${srcdir}/${_gitname}"
	install -dm755 "${pkgdir}/usr/share/backgrounds/gnome"
	ln -s "/usr/share/dynamicwallpapers/catalina/images" "${pkgdir}/usr/share/backgrounds/gnome/catalina"
	install -Dm644 catalina-timed.xml "${pkgdir}/usr/share/backgrounds/gnome/catalina-timed.xml"
	install -Dm644 catalina.xml "${pkgdir}/usr/share/gnome-background-properties/catalina.xml"
 }
 
 package_dynamic-wallpaper-catalina-kde-git() {
	depends=(plasma5-wallpapers-dynamic dynamic-wallpaper-catalina-images-git)
	pkgdesc="Azimuth Elevation based KDE macOS Catalina wallpaper"
	install=dynamic-wallpaper-catalina-kde-git.install
	cd "${srcdir}/${_gitname}"
	install -Dm644 catalina.json "${pkgdir}/usr/share/dynamicwallpapers/catalina/metadata.json"
 }
