# Maintainer: Pavan Rikhi <pavan.rikhi@gmail.com>
# Maintainer: BrLi <brli at chakralinux dot org>

pkgname=pencil
pkgver=3.1.0
pkgrel=4
pkgdesc="Sketching and GUI prototyping/wireframing tool"
arch=('any')
license=('GPL2')
url="https://github.com/evolus/pencil"
depends=(electron)
makedepends=(yarn)
source=("https://github.com/evolus/pencil/archive/v$pkgver.tar.gz"
        'fixed-package-json.patch')
sha256sums=('e14eddd0aad28919cfdf8d47b726f9c75a3a0d2042605e8da96309c23a995f44'
            'ab36a7476d4a04dc684441f67faa3f7f84168a725b4e977d467e0b4321eb0d50')
conflicts=('evolus-pencil-bin' 'pencil-v2')

prepare() {
    cd "${srcdir}/${pkgname}-${pkgver}"

    # We don't build electron and friends, and don't depends on postinstall script
    patch -Np1 -i "${srcdir}/fixed-package-json.patch"
    sed '/^\s*\"electron.*$/d;/postinstall/d' -i app/package.json
}

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    yarn install --pure-lockfile \
                 --no-bin-links \
                 --cache-folder "${srcdir}/cache" \
                 --link-folder "${srcdir}/link" \
                 --ignore-scripts

    cd "${srcdir}/${pkgname}-${pkgver}/app"
    yarn install --pure-lockfile \
                 --no-bin-links \
                 --cache-folder "${srcdir}/cache" \
                 --link-folder "${srcdir}/link" \
                 --ignore-scripts


    # Aggressively remove binary and useless files in node_modules
    find . -iname "CHANGELOG*" -exec rm -rfv {} +
    find . -iname "README*" -exec rm -rfv {} +
    find . -iname "*.md" -exec rm -rfv {} +
    find . -iname "*test*" -exec rm -rfv {} +
    find . -iname "license*" -exec rm -rfv {} +
    find . -iname ".*" -exec rm -rfv {} + || true
    find . -name "yarn.lock" -exec rm -rfv {} +
}

package() {
    local _destdir=usr/lib/"${pkgname}"
    install -dm755 "${pkgdir}/${_destdir}"

    install -Dm755 /dev/stdin "${pkgdir}/usr/bin/${pkgname}" <<END
#!/bin/sh
exec electron /${_destdir} "\$@"
END

    cd "${srcdir}/${pkgname}-${pkgver}"

    cp -r --no-preserve=ownership --preserve=mode app/* "${pkgdir}/${_destdir}/"

    # install icons of vary sizes to hi-color theme
    for px in 16 24 32 48 64 96 128 256; do
        install -Dm644 "build/icons/${px}x${px}.png" \
            "${pkgdir}/usr/share/icons/hicolor/${px}x${px}/apps/${pkgname}.png"
    done

    install -Dm644 /dev/stdin  "$pkgdir/usr/share/applications/pencil.desktop" <<END
[Desktop Entry]
Encoding=UTF-8
Name=Pencil
Comment=Sketching and GUI prototyping tool
Comment[cs]=Nástroj na kreslení a prototypování GUI
Comment[el]=Εργαλείο σχεδιασμού και κατασκευής πρωτοτύπων γραφικού περιβάλλοντος διεπαφής χρήστη
Comment[es]=Herramienta de esbozado y prototipado de interfaces gráficas de usuario
Comment[vi_VN]=Công cụ phát thảo giao diện Pencil
Exec=/usr/bin/pencil %u
Terminal=false
Type=Application
StartupNotify=true
Icon=pencil
Categories=Graphics;2DGraphics;Development;
MimeType=application/x-evolus-pencil;
END

    install -Dm644 /dev/stdin  "${pkgdir}/usr/share/mime/application/pencil.xml" <<END
<?xml version="1.0" encoding="UTF-8"?>
<mime-info xmlns="http://www.freedesktop.org/standards/shared-mime-info">
    <mime-type type="application/x-evolus-pencil">
        <comment>Evolus Pencil Document</comment>
        <icon name="image-x-generic"/>
        <glob pattern="*.ep"/>
        <glob pattern="*.epz"/>
        <glob pattern="*.epgz"/>
        <sub-class-of type="text/xml"/>
    </mime-type>
</mime-info>
END
}
