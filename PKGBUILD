pkgname=terasology-devbuild
pkgver=1978
_omega_ver=732
pkgrel=2
pkgdesc="Yet another high resolution game with blocks like Minecraft! (Last succesful development build)"
arch=('x86_64' 'i686')
license=('Apache')
url="http://terasology.org"
options=('!strip')
depends=('java-environment-openjdk=8' 'openal' 'libxcursor' 'libxxf86vm' 'libxrandr')
makedepends=('unzip')
source=(
    "$pkgname"
    "${pkgname}.desktop"
    "http://jenkins.terasology.org/job/DistroOmega/${_omega_ver}/artifact/distros/omega/build/distributions/TerasologyOmega.zip"
)
sha512sums=('9d2562e769aee38a09de315f9900754827ec2720400e10553f0cbf78c0834bf325220c42c249f17999bc764aa4a0c12aa7abe162d43ea5327672c2fa88fa2669'
            '9ecacc34ae0a17cfe1031f32ee4f25e4e840bed072445ac0a8ffc1b2a012a7b60fed739fcc2ceab8083293a31e7409406bc190c4295022df82815f48c5541d19'
            '160e27153a68d4c7dd943c061b1020a5bc7bbea19c0e7024a646ed373c5bff56d7ca35505c3979c9b959148285359685362a9187cddec8ac9bd01dac73da0721')

package() {
    cd "$srcdir"
    install -Dm 755 "${srcdir}/${pkgname}" "$pkgdir/usr/bin/${pkgname}"
    install -Dm 644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"

    #cleanup
    rm "${srcdir}/${pkgname}" "${srcdir}/${pkgname}.desktop" "${srcdir}/TerasologyOmega.zip"

    #extract and install icons
    unzip -u libs/engine-* "org/terasology/icons/*"
    pushd org/terasology/icons
    for icon in *
    do
        size=${icon##*_}        #gooey_sweet_XX.png -> XX.png
        size=${size/.png/}      #XX.png -> XX
        install -Dm 644 "$icon" "${pkgdir}/usr/share/icons/${size}x${size}/apps/${pkgname}.png"
    done
    install -Dm 644 "${pkgdir}/usr/share/icons/64x64/apps/${pkgname}.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
    popd
    rm -r org

    #remove files/dirs for other operating systems
    rm run_macosx.command Terasology.{x86,x64}.exe
    rm -r natives/{macosx,windows}
    rm natives/linux/libopenal*
    if [[ "$CARCH" == 'x86_64' ]]; then
        rm natives/linux/lib{jinput-linux,lwjgl}.so
    elif [[ "$CARCH" == 'i686' ]]; then
        rm natives/linux/lib{jinput-linux,lwjgl}64.so
    fi

    cp -ra "$srcdir" "${pkgdir}/usr/share/${pkgname}"

    #clean source directory to avoid problems on next build
    rm -r ./*
}
