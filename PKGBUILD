# Maintainer : Daniel Bermond < yahoo-com: danielbermond >

# music add-on:
# -------------
# Roland SC-55 (sc55): for an authentic gaming experience, as they
#                      were meant to be heard in the 90s (default)
#
# Yamaha YMF262 OPL3 (opl3): for a nostalgic gaming experience

_music='sc55' # (sc55/opl3) - update checksums if you change

pkgbase=dxx-rebirth-git
pkgname=('d1x-rebirth-git' 'd2x-rebirth-git')
pkgver=0.59.100.r825.gac2985400
pkgrel=1
pkgdesc='A source port of the Descent and Descent 2 engines (git version)'
arch=('i686' 'x86_64')
url='https://www.dxx-rebirth.com/'
license=('custom')
depends=('sdl_mixer' 'physfs' 'glu' 'libpng')
makedepends=('git' 'scons')
source=("$pkgbase"::'git+https://github.com/dxx-rebirth/dxx-rebirth.git'
        'https://www.dxx-rebirth.com/download/dxx/res/d1xr-hires.dxa'
        "https://www.dxx-rebirth.com/download/dxx/res/d1xr-${_music}-music.dxa"
        "https://www.dxx-rebirth.com/download/dxx/res/d2xr-${_music}-music.dxa")
noextract=('d1xr-hires.dxa'
           "d1xr-${_music}-music.dxa"
           "d2xr-${_music}-music.dxa")
sha256sums=('SKIP'
            'b30a164fa9c6dff05eda6d50f777777df843968d32053f5cc9453fe89d5bed19'
            'b27f7b9dc5f9c2744402c56c9499dfd9503c17e73a2a5223e745529d7867962f'
            'ace152182c70b9a7ae6f911bddbc239566220a287ab5419cab260d5af739bf16')

_common_opts=('lto=1'
              'sdlmixer=1'
              'builddir=./build'
              'prefix=/usr'
              'opengl=yes'
              'sdlmixer=yes'
              'ipv6=yes'
              'use_udp=yes'
              'use_tracker=yes'
              'screenshot=png'
)
_d1x_opts=('d1x=1'
           'd2x=0'
           'sharepath=/usr/share/d1x-rebirth'
           "${_common_opts[@]}"
)
_d2x_opts=('d1x=0'
           'd2x=1'
           'sharepath=/usr/share/d2x-rebirth'
           "${_common_opts[@]}"
)

pkgver() {
    cd "$pkgbase"
    
    # git, tags available
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
}

build() {
    cd "$pkgbase"
    
    scons "${_d1x_opts[@]}"
    scons "${_d2x_opts[@]}"
}

package_d1x-rebirth-git() {
    pkgdesc='A source port of the Descent engine (git version)'
    provides=('d1x-rebirth')
    conflicts=('dxx-rebirth' 'd1x-rebirth')
    
    cd "$pkgbase"
    
    scons install DESTDIR="$pkgdir" "${_d1x_opts[@]}"
    
    # add-ons
    install -D -m644 "${srcdir}/d1xr-hires.dxa"           "${pkgdir}/usr/share/d1x-rebirth/d1xr-hires.dxa"
    install -D -m644 "${srcdir}/d1xr-${_music}-music.dxa" "${pkgdir}/usr/share/d1x-rebirth/d1xr-${_music}-music.dxa"
    
    # desktop file
    install -D -m644 d1x-rebirth/d1x-rebirth.desktop "${pkgdir}/usr/share/applications/d1x-rebirth.desktop"
    
    # icon
    install -D -m644 d1x-rebirth/d1x-rebirth.xpm "${pkgdir}/usr/share/pixmaps/d1x-rebirth.xpm"
    
    # license
    install -D -m644 COPYING.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

package_d2x-rebirth-git() {
    pkgdesc='A source port of the Descent 2 engine (git version)'
    provides=('d2x-rebirth')
    conflicts=('dxx-rebirth' 'd2x-rebirth')
    
    cd "$pkgbase"
    
    scons install DESTDIR="$pkgdir" "${_d2x_opts[@]}"
    
    # add-on
    install -D -m644 "${srcdir}/d2xr-${_music}-music.dxa" "${pkgdir}/usr/share/d2x-rebirth/d2xr-${_music}-music.dxa"
    
    # desktop file
    install -D -m644 d2x-rebirth/d2x-rebirth.desktop "${pkgdir}/usr/share/applications/d2x-rebirth.desktop"
    
    # icon
    install -D -m644 d2x-rebirth/d2x-rebirth.xpm "${pkgdir}/usr/share/pixmaps/d2x-rebirth.xpm"
    
    # license
    install -D -m644 COPYING.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
