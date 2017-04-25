# Maintainer: David Rosenstrauch <darose@darose.net>

pkgname="adwaita-dark-darose"
pkgver=1.0
pkgrel=2
pkgdesc="Adwaita theme hacked to use my custom color scheme.  (Dark blues instead of greys.)"
url="none"
license=('GPL')
arch=('any')
depends=('gnome-themes-standard')
source=('no-source.txt')
md5sums=('SKIP')

build() {
    mkdir "${srcdir}/${pkgname}"
    cd "${srcdir}/${pkgname}"

    cp -r /usr/share/themes/Adwaita-dark/gtk-2.0 .

    mkdir gtk-3.0
    for f in $(gresource list /usr/lib/libgtk-3.so.0 | grep Adwaita | grep -v assets); do
        gresource extract /usr/lib/libgtk-3.so.0 $f > gtk-3.0/$(basename $f)
    done
    echo '@import url("gtk-contained-dark.css");' > gtk-3.0/gtk.css
    echo '@import url("gtk-contained-dark.css");' > gtk-3.0/gtk-dark.css
    sed -i 's|#33393b|#181c28|' gtk-3.0/gtk-contained-dark.css
    sed -i 's|#232729|#00001b|' gtk-3.0/gtk-contained-dark.css
    sed -i 's|#ffffff|#c3c3c3|' gtk-3.0/gtk-contained-dark.css
    sed -i 's|white|#c3c3c3|' gtk-3.0/gtk-contained-dark.css
#    sed -i 's|#262b2d|#181c28|' gtk-3.0/gtk-contained-dark.css
    sed -i 's|#262b2d|#1a1e2c|' gtk-3.0/gtk-contained-dark.css
    sed -i 's|#215d9c|#566b96|' gtk-3.0/gtk-contained-dark.css
    sed -i 's|#2d3234|#1c202e|' gtk-3.0/gtk-contained-dark.css

    # dark gradient
    sed -i 's|#2e3436|#293045|' gtk-3.0/gtk-contained-dark.css
    sed -i 's|#2a2e30|#1c202e|' gtk-3.0/gtk-contained-dark.css
    sed -i 's|#25292b|#171b27|' gtk-3.0/gtk-contained-dark.css

    mkdir gtk-3.0/assets
    for f in $(gresource list /usr/lib/libgtk-3.so.0 | grep Adwaita/assets); do
        gresource extract /usr/lib/libgtk-3.so.0 $f > gtk-3.0/assets/$(basename $f)
    done

    cp /usr/share/themes/Adwaita-dark/index.theme .
    sed -i 's|Adwaita-dark|Adwaita-dark-darose|' index.theme
}

package() {
    cd "${srcdir}/"

    install -d -m 755 "${pkgdir}/usr/share/themes/"
    cp -r "${pkgname}" "${pkgdir}/usr/share/themes/"
}
