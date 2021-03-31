# Maintainer:  DasSkelett <dasskelett@dasskelett.dev>
# Contributor: Kasei Wang <kasei@kasei.im>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Sébastien Luttringer
# Contributor: Drew DeVault

pkgname=nginx-quic
pkgver=1.19.9
pkgrel=1
pkgdesc='Lightweight HTTP server and IMAP/POP3 proxy server, HTTP/3 QUIC branch'
arch=('i686' 'x86_64')
url='https://nginx.org'
license=('custom')
depends=('geoip' 'libxcrypt' 'mailcap' 'pcre' 'zlib')
makedepends=('cmake' 'git' 'go' 'mercurial')
backup=('etc/nginx/fastcgi.conf'
        'etc/nginx/fastcgi_params'
        'etc/nginx/koi-win'
        'etc/nginx/koi-utf'
        'etc/nginx/nginx.conf'
        'etc/nginx/scgi_params'
        'etc/nginx/uwsgi_params'
        'etc/nginx/win-utf'
        'etc/logrotate.d/nginx')
install=nginx.install
provides=('nginx')
conflicts=('nginx')
source=("hg+https://hg.nginx.org/nginx-quic#revision=f1986657fc26"
        "git+https://boringssl.googlesource.com/boringssl#commit=0da75f35d51ab7fbfa8efaf71c87606ee26f5db3"
        "service"
        "logrotate")
sha256sums=('SKIP'
            'SKIP'
            '05fdc0c0483410944b988d7f4beabb00bec4a44a41bd13ebc9b78585da7d3f9b'
            'b9af19a75bbeb1434bba66dd1a11295057b387a2cbff4ddf46253133909c311e')

_common_flags=(
  --with-file-aio
  --with-http_addition_module
  --with-http_auth_request_module
  --with-http_dav_module
  --with-http_degradation_module
  --with-http_flv_module
  --with-http_geoip_module
  --with-http_gunzip_module
  --with-http_gzip_static_module
  --with-http_mp4_module
  --with-http_realip_module
  --with-http_secure_link_module
  --with-http_slice_module
  --with-http_ssl_module
  --with-http_stub_status_module
  --with-http_sub_module
  --with-http_v2_module
  --with-mail
  --with-mail_ssl_module
  --with-pcre-jit
  --with-stream
  --with-stream_ssl_module
  --with-threads
)

_mainline_flags=(
  --with-stream_ssl_preread_module
  --with-stream_geoip_module
  --with-stream_realip_module
)

_quic_flags=(
  --with-http_v3_module
  --with-http_quic_module
  --with-stream_quic_module
)

build() {
  export CPPFLAGS=${CPPFLAGS/-D_FORTIFY_SOURCE=[1-9]/-D_FORTIFY_SOURCE=0}
  export CXXFLAGS="$CXXFLAGS -fPIC"
  export CFLAGS="$CFLAGS -fPIC"

  cd ${srcdir}/boringssl
  mkdir build && cd build && cmake -DCMAKE_BUILD_TYPE=Release ../ && make
  cd ${srcdir}/boringssl
  mkdir -p .openssl/lib && cd .openssl && ln -s ../include . && cd ../
  cp ${srcdir}/boringssl/build/crypto/libcrypto.a ${srcdir}/boringssl/build/ssl/libssl.a .openssl/lib && cd ..

  cd ${srcdir}/$pkgname
  ./auto/configure \
    --prefix=/etc/nginx \
    --conf-path=/etc/nginx/nginx.conf \
    --sbin-path=/usr/bin/nginx \
    --pid-path=/run/nginx.pid \
    --lock-path=/run/lock/nginx.lock \
    --user=http \
    --group=http \
    --http-log-path=/var/log/nginx/access.log \
    --error-log-path=stderr \
    --http-client-body-temp-path=/var/lib/nginx/client-body \
    --http-proxy-temp-path=/var/lib/nginx/proxy \
    --http-fastcgi-temp-path=/var/lib/nginx/fastcgi \
    --http-scgi-temp-path=/var/lib/nginx/scgi \
    --http-uwsgi-temp-path=/var/lib/nginx/uwsgi \
    --with-openssl=${srcdir}/boringssl \
    --with-cc-opt="-I../boringssl/include" \
    --with-ld-opt="-L../boringssl/build/ssl -L../boringssl/build/crypto" \
    ${_common_flags[@]} \
    ${_mainline_flags[@]} \
    ${_quic_flags[@]}

  touch ${srcdir}/boringssl/.openssl/include/openssl/ssl.h
  make
}

package() {
  cd $pkgname
  make DESTDIR="$pkgdir" install

  sed -e 's|\<user\s\+\w\+;|user html;|g' \
    -e '44s|html|/usr/share/nginx/html|' \
    -e '54s|html|/usr/share/nginx/html|' \
    -i "$pkgdir"/etc/nginx/nginx.conf

  rm "$pkgdir"/etc/nginx/*.default
  rm "$pkgdir"/etc/nginx/mime.types  # in mailcap

  install -d "$pkgdir"/var/lib/nginx
  install -dm700 "$pkgdir"/var/lib/nginx/proxy

  chmod 755 "$pkgdir"/var/log/nginx
  chown root:root "$pkgdir"/var/log/nginx

  install -d "$pkgdir"/usr/share/nginx
  mv "$pkgdir"/etc/nginx/html/ "$pkgdir"/usr/share/nginx

  install -Dm644 ../logrotate "$pkgdir"/etc/logrotate.d/nginx
  install -Dm644 ../service "$pkgdir"/usr/lib/systemd/system/nginx.service
  install -Dm644 docs/text/LICENSE "$pkgdir"/usr/share/licenses/$provides/LICENSE
  install -d "$pkgdir"/usr/share/licenses/$pkgname
  ln -s /usr/share/licenses/$provides/LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE

  rmdir "$pkgdir"/run

  install -d "$pkgdir"/usr/share/man/man8/
  gzip -9c docs/man/nginx.8 > "$pkgdir"/usr/share/man/man8/nginx.8.gz

  for i in ftdetect indent syntax; do
    install -Dm644 contrib/vim/${i}/nginx.vim \
      "${pkgdir}/usr/share/vim/vimfiles/${i}/nginx.vim"
  done
}

# vim:set ts=2 sw=2 et:
