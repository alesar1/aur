# Contributor: ANDRoid7890 andrey.android7890@gmail.com
pkgbase=meridius-bin-git
pkgname=("${pkgbase}") #"${pkgbase}-electron")
pkgver=v2.2.6
pkgrel=1
pkgdesc="Free and modern music player for VK. Meridius - it is a beautiful music player for vk.com"
arch=('x86_64')
url="https://purplehorrorrus.github.io/meridius"
license=('custom')
makedepends=('git')
options=('!strip' '!emptydirs')
source=(git+https://github.com/PurpleHorrorRus/Meridius.git)
md5sums=('SKIP')

pkgver(){
    cd "Meridius"
    git tag --sort=committerdate | tail -1
}         
         
build(){
    cd $srcdir
    debfile=meridius-${pkgver//v}.deb
    deburl=https://github.com/PurpleHorrorRus/Meridius/releases/download/$pkgver/$debfile
    
    curl -qgb "" -fLC - --retry 3 --retry-delay 3 -o $debfile $deburl
    bsdtar -xf $debfile
}
    
package_meridius-bin-git(){
    depends=('at-spi2-core' 'desktop-file-utils' 'gtk3' 'hicolor-icon-theme' 'libnotify' 'libsecret' 'libxss' 'libxtst' 'nss' 'util-linux-libs' 'xdg-utils')
    optdepends=('libappindicator-gtk3')
    arch=('x86_64')
    pkgdesc="Music Player for vk.com based on Electron, NuxtJS, Vue. (Built-in Electron)"
    provides=('meridius')
    conflicts=('meridius')
    
        tar xf data.tar.xz -C "${pkgdir}"
        install -D -m644 "${pkgdir}/opt/Meridius/LICENSES.chromium.html" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# https://aur.archlinux.org/packages/meridius-electron-bin/
# package_meridius-bin-git-electron() {
#     depends=('electron' 'libxss' 'libxtst' 'at-spi2-core' 'util-linux-libs' 'libsecret')
#     arch=('x86_64')
#     pkgdesc="Music Player for vk.com based on Electron, NuxtJS, Vue. (System Electron)"
#     provides=('meridius')
#     conflicts=('meridius')
#     
#         mkdir -p ${pkgdir}/usr/share/Meridius
#         mkdir -p ${pkgdir}/usr/share/icons/hicolor/256x256/apps
#         mkdir -p ${pkgdir}/usr/share/applications
# 
#         bsdtar -xvf data.tar.xz ./opt/Meridius/resources/app.asar ./usr/share/applications/meridiusreborn.desktop ./usr/share/icons/hicolor/256x256/apps/meridiusreborn.png
# 
#         sed -i 's!/opt/Meridius/meridiusreborn!electron /usr/share/Meridius/app.asar!' usr/share/applications/meridiusreborn.desktop
#         sed -i 's!Audio;!Audio;Music;Player;AudioVideo;!' usr/share/applications/meridiusreborn.desktop
# 
#         mv usr/share/icons/hicolor/256x256/apps/meridiusreborn.png ${pkgdir}/usr/share/icons/hicolor/256x256/apps
#         mv usr/share/applications/meridiusreborn.desktop ${pkgdir}/usr/share/applications
#         mv opt/Meridius/resources/app.asar ${pkgdir}/usr/share/Meridius
# }
