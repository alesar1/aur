# Maintainer: John-Michael Mulesa <jmulesa@gmail.com>
pkgname=forked-daapd
pkgver=27.4
pkgrel=1
pkgdesc="iTunes-compatible media server, originally intended as a rewrite of Firefly Media Server (mt-daapd)."
arch=('armv6h' 'armv7h' 'i686' 'x86_64')
url="https://github.com/ejurgensen/forked-daapd"
license=('GPL')
groups=()
depends=(avahi sqlite3 ffmpeg confuse libevent mxml libunistring libplist libantlr3c libsodium protobuf-c json-c libwebsockets)
makedepends=(gperf java-runtime-headless)
optdepends=()
provides=()
conflicts=()
replaces=()
backup=(etc/forked-daapd.conf)
options=()
install=forked-daapd.install
changelog=
source=(https://github.com/ejurgensen/forked-daapd/archive/$pkgver.tar.gz forked-daapd.install forked-daapd.service http://www.antlr3.org/download/antlr-3.4-complete.jar)
noextract=()
md5sums=('4dfb971ee446fa70be6c7f17f63ee171'
         'bad1372140c914d1c312a186087fe375'
         '5047515b396f37a9030a003f12eaaafa'
         '1b91dea1c7d480b3223f7c8a9aa0e172')
sha1sums=('d330c770e683e7ffd15fc37fb750367dd755da11'
          '90a796470231ae7c22635c3fbbb47f9d8a61ebd6'
          '76623036d11d411cb438f9ac8f9cdf21f12b305f'
          '5cab59d859caa6598e28131d30dd2e89806db57f')
sha256sums=('b0c8be525f3f1d24bde1534c826d4f66ebcdbb821194deca4d62a50b96b98495'
            '19b394a38ac88247d6b7d939e648ac53e8f08bef852e76c79355d1231bffad3d'
            'f623bfe983e65bd5c658bb456b775c62812e3daf8a5f27d154cf70c48c1e51bf'
            '9d3e866b610460664522520f73b81777b5626fb0a282a5952b9800b751550bf7')
sha384sums=('ff8f43145b73bf59649407cf07cd6616b5892ae98c46991959d6a8ed3ce6435eb230414576bd77df23894663674d3c85'
            'b536551061e8404f0128e9313411c9f2419d7bf4c982c8d9f32300727c873219d90c90bda32256fb9d3bd560c0be2704'
            'a4dc8c4a504496a624e210ac668e5190eb6756a4f7f2825c42624f424723ddfd0c0338fa753ad1d61944d3bdf08451a7'
            'a2fbecb5fae6af12adcfb3801624d4941e25e4b526794f7b9a713ae8b6873962ca36a74f9220d7e0057aaa89d5ca6d68')
sha512sums=('51aac29f6d76b7e31af58f643d1cf5ccdf9bf7a7ded1fa3f731618dcd950148ae251d37ae44bcee800e4d577bb39484fb09dac6825caa1f614c0c93bd5d5f4ac'
            'f82c8b73b39e6b8e83b09953d187b98b9fb856914a0a231b6758701f4f383b5dd5368ec468011b78402fd9850662b61b48e6198336ed4049cfd1ed7cb8659e9b'
            'bc32f4cb705bf3890e85a51530818a1d86b260c1f6c1203b0f07757a8ab23b7654a357bc9c7ab10b370f4714f26b60368c1910c7efe9197041015183518a40d6'
            '04be4dfba3a21f3ab9d9e439a64958bd8e844a9f151b798383bd9e0dd6ebc416783ae7cb1d1dbb27fb7288ab9756b13b8338cdb8ceb41a10949c852ad45ab1f2')

build() {
  local OLD_PATH="$PATH"
  export PATH="$srcdir:$PATH"
  echo "#!/bin/bash" > antlr3
  local safequotedsrcdir="'${srcdir//\'/\'\\\'\'}'"
  echo "exec java -cp ${safequotedsrcdir}/antlr-3.4-complete.jar org.antlr.Tool \"\$@\"" >> antlr3
  chmod a+x ./antlr3
  cd "$srcdir/$pkgname-$pkgver"
  echo "$PATH"
  autoreconf -i
  ./configure --prefix=/usr --sysconfdir=/etc --localstatedir=/var --enable-itunes --enable-chromecast --enable-lastfm --with-libwebsockets --sbindir=/usr/bin LDFLAGS="-Wl,--allow-multiple-definition"
  make
  export PATH="$OLD_PATH"
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  install -D -m644 "$srcdir/forked-daapd.service" "$pkgdir/usr/lib/systemd/system/forked-daapd.service"
  make DESTDIR="$pkgdir/" install
  rmdir $pkgdir/var/run
}
