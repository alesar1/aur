# Maintainer: brent s. <bts[at]square-r00t[dot]net>
validpgpkeys=('748231EBCBD808A14F5E85D28C004C2F93481F6B')
# Bug reports can be filed at https://bugs.square-r00t.net/index.php?project=3
# News updates for packages can be followed at https://devblog.square-r00t.net
pkgname=zandronum-bin
pkgver=3.0.1
pkgrel=2
_fmodex_ver=4.24.16
pkgdesc="OpenGL ZDoom port with Client/Server multiplayer"
#arch=('i686' 'x86_64')
arch=('x86_64')
url="https://zandronum.com/"
license=('custom')
depends=('sdl' 'libjpeg6-turbo' 'glu' 'openssl-1.0' 'fluidsynth' 'fmodex')
optdepends=('timidity++: midi support' 'freedoom: free IWAD' 'gtk2: for a GUI selection screen' 'doomseeker: a GUI server browser')
_pkgname=zandronum
conflicts=('zandronum2' 'zandronum')
install=zandronum.install
source=("https://zandronum.com/downloads/${_pkgname}${pkgver}-linux-x86_64.tar.xz"
        "LICENSE.txt"
        "${_pkgname}.launcher"
        "${_pkgname}-server.launcher"
        "${_pkgname}.png"
        "${_pkgname}.desktop"
        "LICENSE.txt.sig"
        "${_pkgname}.launcher.sig"
        "${_pkgname}-server.launcher.sig"
        "${_pkgname}.png.sig"
        "${_pkgname}.desktop.sig"
        "${_pkgname}${pkgver}-linux-x86_64.tar.xz.sig")
sha512sums=('d09106cc7444f61abea8e07e4ea9d009b9e1e3e2e86c8f2f0320dcbe1636eda5abe2a44ba995fbb7b58c32ca43d79cb6f33ee0e54b4b9d33998a1fa3a2ea58a8'
            'b928f3211ff31f17fc2d754728e299b5783e1b946b4019713718b7613e13ff0a7c4f02087c0ab4f137f7a0de57a2bfeaa6ed63285d0e6063d2b4734b097ce9e1'
            '488a274e40727ea58e1a6a67d9d37e77476f4fbcee9071e5f278fcfd88ddce42d25d3337d5d15455aa5cba32a176ec731e398cddfc6b86e151ba92c8bc1e1f22'
            '5c4ab297579c3b623ea549548b9e0674195f3d86f17589a2a756c8362e46dec0f1eb488ec0347be14968969f9ba802998bd67d910d3d6500a90f50074fcabfb5'
            'baad2256990455c275b23c56984a1db3b1ced921b69f2688c84d99eda996f7b61466543c7bd649e295c12b48dc288dce79ad911e2b5b5e0640a899f5281712a4'
            '1dacf401b7a3e25a4a14275c25ad5a63db1ead45fb1140ddbe6a3ff8e0175960d5b9b85b9b061abf81f00d48671366c8624eaaba2625fb3b4d18a2785ee367a6'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP')

if [ "${CARCH}" == "x86_64" ];
then
        _fmod_suffix="64"
else
        _fmod_suffix=""
fi

package() {
  cd ${srcdir}
  
  install -Dm644 "zandronum.pk3" "${pkgdir}/usr/share/${pkgname}/zandronum.pk3"
  #install -Dm644 "brightmaps.pk3" "${pkgdir}/usr/share/${pkgname}/brightmaps.pk3"
  install -Dm644 "skulltag_actors.pk3" "${pkgdir}/usr/share/${pkgname}/skulltag_actors.pk3"
  install -Dm755 "liboutput_sdl.so" "${pkgdir}/usr/share/${pkgname}/lib/liboutput_sdl.so"
  install -Dm755 "zandronum" "${pkgdir}/usr/share/${pkgname}/zandronum"
  install -Dm755 "zandronum-server" "${pkgdir}/usr/share/${pkgname}/zandronum-server"
  install -Dm755 "zandronum.launcher" "${pkgdir}/usr/bin/zandronum"
  install -Dm755 "zandronum-server.launcher" "${pkgdir}/usr/bin/zandronum-server"
  install -Dm755 "libfmodex${_fmod_suffix}-${_fmodex_ver}.so" "${pkgdir}/usr/share/${pkgname}/lib/libfmodex${_fmod_suffix}-${_fmodex_ver}.so"
  install -Dm644 "zandronum.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
  install -Dm644 "zandronum.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -dm755 ${pkgdir}/usr/share/${pkgname}/lib

#  ln -s "/usr/lib/libcrypto.so" "$pkgdir/usr/share/zandronum/lib/libcrypto.so.0.9.8"
#  ln -s "/usr/lib/libssl.so" "$pkgdir/usr/share/zandronum/lib/libssl.so.0.9.8"

  install -Dm644 "LICENSE.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

