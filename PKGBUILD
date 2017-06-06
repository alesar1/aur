# Maintainer: John-Michael Mulesa <jmulesa@gmail.com>
pkgname=forked-daapd
pkgver=24.2
pkgrel=2
pkgdesc="iTunes-compatible media server, originally intended as a rewrite of Firefly Media Server (mt-daapd)."
arch=('armv6h' 'armv7h' 'i686' 'x86_64')
url="https://github.com/ejurgensen/forked-daapd"
license=('GPL')
groups=()
depends=(avahi sqlite3 ffmpeg confuse libevent mxml libunistring libplist libantlr3c protobuf-c)
makedepends=(gperf java-runtime-headless)
optdepends=()
provides=()
conflicts=()
replaces=()
backup=(etc/forked-daapd.conf etc/avahi/services/forked-daapd.service)
options=()
install=forked-daapd.install
changelog=
source=(https://github.com/ejurgensen/forked-daapd/archive/$pkgver.tar.gz forked-daapd.install forked-daapd.avahi forked-daapd.service http://www.antlr3.org/download/antlr-3.4-complete.jar gperf_fix.patch)
noextract=()
md5sums=('48028d121e64709831c114d393ae15c6'
         'bad1372140c914d1c312a186087fe375'
         'c01fde6f40880fed6092c0830a5f232e'
         '5047515b396f37a9030a003f12eaaafa'
         '1b91dea1c7d480b3223f7c8a9aa0e172'
         '6f030043d13c5f22a161f7c24a76c19a')
sha1sums=('6121055a6251a1b7d67a5a602e236321e4db422a'
          '90a796470231ae7c22635c3fbbb47f9d8a61ebd6'
          'a6f3c5ee05365481caaa569fe15ca34ffe4dc847'
          '76623036d11d411cb438f9ac8f9cdf21f12b305f'
          '5cab59d859caa6598e28131d30dd2e89806db57f'
          'd40d92550608dc886af8f7cbe2ef6672624f0d9c')
sha256sums=('a2be1ba2d8ae3134b1ec554924a9831e67fe0e07522c76cdfda74da40b621aca'
            '19b394a38ac88247d6b7d939e648ac53e8f08bef852e76c79355d1231bffad3d'
            '0efc8aac56d2b3a70d74c90a72595f3b685a30ee94a278880cd0cc4db35fa113'
            'f623bfe983e65bd5c658bb456b775c62812e3daf8a5f27d154cf70c48c1e51bf'
            '9d3e866b610460664522520f73b81777b5626fb0a282a5952b9800b751550bf7'
            '63007fe7bbcd1045abb759376b51994b68f0a920d63e9699a21ce8268a2789bf')
sha384sums=('361b971f645c2848ca1fa15f462014bcfb9d961ce2f060133979dd717415c9c92be3a5d3590eec798f9763feed5baa92'
            'b536551061e8404f0128e9313411c9f2419d7bf4c982c8d9f32300727c873219d90c90bda32256fb9d3bd560c0be2704'
            '36bdb6cfc389572f7f34658307b68f31d79ba9a5827eeee60c43f042f3d75d90c9d76e90840258e57e59c5c4d8d47d52'
            'a4dc8c4a504496a624e210ac668e5190eb6756a4f7f2825c42624f424723ddfd0c0338fa753ad1d61944d3bdf08451a7'
            'a2fbecb5fae6af12adcfb3801624d4941e25e4b526794f7b9a713ae8b6873962ca36a74f9220d7e0057aaa89d5ca6d68'
            '39f5fd52e43636aab79524ca0c119095814e7c2df276853e6cfe515b92445479237828209d5976066abac879e5734ba5')
sha512sums=('1408ddbb7dfc1e9a0d8645fa276d0a711dc11dc6d3c4114605c3f5580429edd3bdf52ce8c4aa571144ecc0b90f99d0fcd8a97384d829a3f0c3d54502dedf7819'
            'f82c8b73b39e6b8e83b09953d187b98b9fb856914a0a231b6758701f4f383b5dd5368ec468011b78402fd9850662b61b48e6198336ed4049cfd1ed7cb8659e9b'
            '70da9a199ac821736ea6cd33455c14cf32ab5bc4b401dc31179dc6029c36fcb543810d0041f309fdcfd7be84d7d1f921b63a70993ad89b6f0c1ea06e51859dfb'
            'bc32f4cb705bf3890e85a51530818a1d86b260c1f6c1203b0f07757a8ab23b7654a357bc9c7ab10b370f4714f26b60368c1910c7efe9197041015183518a40d6'
            '04be4dfba3a21f3ab9d9e439a64958bd8e844a9f151b798383bd9e0dd6ebc416783ae7cb1d1dbb27fb7288ab9756b13b8338cdb8ceb41a10949c852ad45ab1f2'
            'a430e881b934340a18fe64b2fbe579ede6c37467534b29cb23a1cbb248dadc81c44a0758836a63b8c9e5cad9532c6b5ef7b9436b12a08f8a4181595c115d0447')

prepare() {
  cd $pkgname-$pkgver
  patch -Np1 -i "${srcdir}/gperf_fix.patch"
}

build() {
  OLD_PATH=$PATH
  export PATH="$srcdir:$PATH"
  echo "#!/bin/bash" > antlr3
  echo "exec java -cp $srcdir/antlr-3.4-complete.jar org.antlr.Tool \"\$@\"" >> antlr3
  chmod a+x ./antlr3
  cd "$srcdir/$pkgname-$pkgver"
  echo $PATH
  autoreconf -i
  ./configure --prefix=/usr --sysconfdir=/etc --localstatedir=/var --enable-itunes --enable-chromecast --enable-lastfm --sbindir=/usr/bin
  make
  export PATH=$OLD_PATH
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  install -D -m644 $srcdir/forked-daapd.service $pkgdir/usr/lib/systemd/system/forked-daapd.service
  install -D -m644 $srcdir/forked-daapd.avahi $pkgdir/etc/avahi/services/forked-daapd.service
  make DESTDIR="$pkgdir/" install
}
