pkgname=rhvoice-git
pkgver=20141006
pkgrel=1
pkgdesc="free and open source speech synthesizer for Russian language"
arch=('i686' 'x86_64')
url="https://github.com/Olga-Yakovleva/RHVoice"
license=('GPL3')
depends=('expat' 'pcre' 'sox' 'libunistring' 'python2' 'portaudio' 'glibmm')
makedepends=('scons' 'gcc')
optdepends=('alsa-utils: for using aplay')
provides=('rhvoice')
replaces=('rhvoice')
backup=('etc/RHVoice/RHVoice.conf')

_gitroot='https://github.com/Olga-Yakovleva/RHVoice.git'
_gitname='RHVoice'

build() {
    cd "$srcdir"
    msg "Connecting to GIT server...."

    if [[ -d "$_gitname" ]]; then
        cd "$_gitname" && git pull origin
        msg "The local files are updated."
    else
        git clone "$_gitroot" "$_gitname"
    fi

    msg "GIT checkout done or server timeout"
    msg "Starting build..."
cat << EOF | patch "$srcdir/$_gitname/SConstruct"
157c157
<         env.AppendUnique(CXXFLAGS=["-std=c++03"])
---
>         env.AppendUnique(CXXFLAGS=["-std=c++11"])
EOF
    cd "$srcdir/$_gitname"

    scons prefix="/usr" sysconfdir="/etc" || return 1

}

package() {
  echo "Installing package"
  cd "$srcdir/$_gitname"
  mkdir -p ${pkgdir}{/usr/bin/,/etc/RHVoice,/usr/lib/,/usr/include,/usr/share/RHVoice,/usr/lib/speech-dispatcher-modules}
  install -D build/linux/service/RHVoice{-service,-client} "${pkgdir}/usr/bin/"
  install -D build/linux/test/RHVoice-test "${pkgdir}/usr/bin/"
  install -D build/linux/sd_module/sd_rhvoice "${pkgdir}/usr/lib/speech-dispatcher-modules/"
  install -D -m 644 config/RHVoice.conf "${pkgdir}/etc/RHVoice/"
  cp -R config/dicts/ "$pkgdir/etc/RHVoice/"
  install -m 644 build/linux/lib/libRHVoice.so "${pkgdir}/usr/lib"
  install -m 644 build/linux/core/libRHVoice_core.so "${pkgdir}/usr/lib"
  install -m 644 build/linux/audio/libRHVoice_audio.so "${pkgdir}/usr/lib"
  install -m 644 src/include/RHVoice.h "${pkgdir}/usr/include/"
  cp -R data/*  "${pkgdir}/usr/share/RHVoice"
  rm "${pkgdir}/usr/share/RHVoice/SConscript"
}
