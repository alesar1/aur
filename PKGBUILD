# Maintainer: Baptiste Jonglez <baptiste--aur at jonglez dot org>
_pkgname=pjproject
pkgname=${_pkgname}-savoirfairelinux
pkgver=2.5.5
pkgrel=6
pkgdesc="Open source SIP stack and media stack, built with patches from SavoirFaire Linux (mostly GnuTLS support)"
arch=('i686' 'x86_64')
url="http://www.pjsip.org/"
license=('GPL')
depends=('gnutls' 'portaudio' 'speex' 'alsa-lib' 'libsamplerate' 'util-linux-ng' 'ffmpeg' 'libsrtp' 'opus')
provides=("${_pkgname}=${pkgver}")
conflicts=("${_pkgname}")
source=("http://www.pjsip.org/release/${pkgver}/${_pkgname}-${pkgver}.tar.bz2"
        endianness.patch
        gnutls.patch
        notestsapps.patch
        ipv6.patch
        ice_config.patch
        multiple_listeners.patch
        pj_ice_sess.patch
        fix_turn_fallback.patch
        fix_ioqueue_ipv6_sendto.patch
        add_dtls_transport.patch)
sha256sums=('ab39207b761d3485199cd881410afeb2d171dff7c2bf75e8caae91c6dca508f3'
            '294d9fba18a8c903979de2c9b531a3ca32a28f90658bf0613a32ebfa7d5e3a69'
            'b95ff95dc52ebcbd21863991ebe68660ab51a3321d13e075613af14ce6bc265c'
            'f88f3e73d2f62ae60d93e84e08f98da7d5febe93f1f390286cafa106178c4f27'
            'fdf64f3260aecbbc5433ae784e12dde462f1a15361f14c5cd0f7be0a3d13f802'
            'b15829c960bf7b58b4b7660e5ce98f59c72b71fce714602bca479b58891621db'
            '7aabc43556456085ca1bb9e17ef11ae5f4701dd392028335a65c06fd2bc1f6f8'
            '6eb446817c9a1e1c1c2922da18a2fb98c4acecb85aa0e2f9981ded1a6bf32b1f'
            '5289671ee86618d665556e5591ef5409354611a6cc0512bfe4100bc6b94fea67'
            '15524714c2bb48612b6504864b279fc56af1d756a197a8afc8141556889cfb70'
            '5b901de12d49d79aba8777f3c7b59d703603be5ed2e1be6696f5d01be584e739')

prepare() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  for patch in endianness.patch gnutls.patch notestsapps.patch ipv6.patch \
               ice_config.patch multiple_listeners.patch pj_ice_sess.patch \
               fix_turn_fallback.patch fix_ioqueue_ipv6_sendto.patch \
               add_dtls_transport.patch
  do
    msg2 "Applying patch $patch"
    patch -p1 < ../"$patch"
  done
}

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  export CXXFLAGS="${CXXFLAGS} -fPIC -DPJSIP_MAX_PKT_LEN=8000"
  export CFLAGS="${CXXFLAGS}"
  ./configure \
      --prefix=/usr \
      --enable-shared \
      --enable-ssl=gnutls \
      --with-external-speex \
      --with-external-srtp \
      --with-external-pa \
      --with-external-gsm \
      --enable-ext-sound \
      --disable-oss \
      --disable-opencore-amr \
      --disable-v4l2 \
      --disable-video \
      --disable-sound
  make dep
  make
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
}
