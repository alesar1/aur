# Maintainer: Diab Neiroukh <lazerl0rd@thezest.dev>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Sébastien Luttringer
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: Miroslaw Szot <mss@czlug.icis.pcz.pl>
# Contributor: Daniel Micay <danielmicay@gmail.com>

pkgbase=nginx-zest-git
pkgname=(nginx-zest-git nginx-zest-src-git)
pkgver=1.19.4
pkgrel=6
epoch=3
pkgdesc='NGINX with beefed up security and performance'
arch=(x86_64)
url='https://github.com/ZestProjects/nginx'
license=(custom)
depends=(pcre openssl geoip mailcap libxcrypt brotli gperftools liburing zstd)
makedepends=(mercurial git 'rust>=1.39')
checkdepends=(perl perl-gd perl-io-socket-ssl perl-fcgi perl-cache-memcached
              memcached ffmpeg inetutils)
backup=(etc/nginx/fastcgi.conf
        etc/nginx/fastcgi_params
        etc/nginx/koi-win
        etc/nginx/koi-utf
        etc/nginx/nginx.conf
        etc/nginx/scgi_params
        etc/nginx/uwsgi_params
        etc/nginx/win-utf
        etc/logrotate.d/nginx)
install=nginx.install
source=(git+$url.git
        hg+https://hg.nginx.org/nginx-tests
        service
        logrotate
        git+https://github.com/cloudflare/quiche.git
        git+https://github.com/cloudflare/zlib.git
        git+https://github.com/google/ngx_brotli.git
        git+https://github.com/tokers/zstd-nginx-module.git
        https://nginx.org/LICENSE)
b2sums=('SKIP'
        'SKIP'
        'b6414f9917fe62cc57556a2927fb404cc839398dac64a0d60c1d45af11a4e6be71bbee5f9bae17ce3604c31ab9247e8c6aec759f86890b54f86267db1fe7c08a'
        'fe32fb75a7677abca86c4bc3f4ca9bfeccb3cd7afb4dd3c4ec21ab8b53cc0d72ba5330a1131498b5df222c2e517bd01e2df9f67256011ff15241b777a85be6b3'
        'SKIP'
        'SKIP'
        'SKIP'
        'SKIP'
        'fbd993990b43a4476d0963287bdc5f55f73fa5ce828f11977cf1abeedd478729a95861d930e27c6a1b0e78b16397164395afc4473fd34e050cadd32b94336beb')

_common_flags=(
  --with-compat
  --with-debug
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
  --with-stream_geoip_module
  --with-stream_realip_module
  --with-stream_ssl_module
  --with-stream_ssl_preread_module
  --with-threads
)

_zest_flags=(
  --with-http_v2_hpack_enc
  --with-http_v3_module
)

prepare() {
  cp -r nginx{,-src}

  cd quiche
  git submodule update --init  # prepare quiche for building 

  cd "$srcdir/zlib"
  [ -f "Makefile" ] && make clean # prepare zlib-cf for building 
  make -f "Makefile.in" "distclean"  # prepare zlib-cf for statically linking
}

build() {
  export CFLAGS="${CFLAGS//-flto/}"  # lto breaks quiche
  export CXXFLAGS="${CXXFLAGS//-flto/}"  # lto breaks quiche
  export CFLAGS="${CFLAGS//-flto=thinlto/}"  # thinlto also breaks quiche
  export CXXFLAGS="${CXXFLAGS//-fltothinlto/}"  # thinlto also breaks quiche

  export CFLAGS="$CFLAGS -fno-builtin-malloc -fno-builtin-calloc -fno-builtin-realloc -fno-builtin-free"  # recommended for tcmalloc
  export CXXFLAGS="$CXXFLAGS -fno-builtin-malloc -fno-builtin-calloc -fno-builtin-realloc -fno-builtin-free"  # recommended for tcmalloc
  export LDFLAGS="$LDFLAGS -ltcmalloc"  # needed for tcmalloc

  cd nginx

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
    --with-cc-opt="$CFLAGS $CPPFLAGS" \
    --with-ld-opt="$LDFLAGS" \
    ${_common_flags[@]} \
    ${_zest_flags[@]} \
    --add-module="$srcdir/ngx_brotli" \
    --add-module="$srcdir/zstd-nginx-module" \
    --build="Zest Projects Ltd." \
    --with-openssl="$srcdir/quiche/deps/boringssl" \
    --with-zlib="$srcdir/zlib" \
    --with-quiche="$srcdir/quiche"

  make
}

check() {
  cd nginx-tests
  rm -rf "h2_server_push.t"  # http2 hpack breaks this test
  TEST_NGINX_BINARY="$srcdir/nginx/objs/nginx" prove .
}

package_nginx-zest-git() {
  cd nginx
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
  install -Dm644 "$srcdir/LICENSE" "$pkgdir"/usr/share/licenses/$pkgname/LICENSE

  rmdir "$pkgdir"/run

  install -d "$pkgdir"/usr/share/man/man8/
  gzip -9c docs/man/nginx.8 > "$pkgdir"/usr/share/man/man8/nginx.8.gz

  for i in ftdetect indent syntax; do
    install -Dm644 contrib/vim/$i/nginx.vim \
      "$pkgdir/usr/share/vim/vimfiles/$i/nginx.vim"
  done
}

package_nginx-zest-src-git() {
  pkgdesc="Source code of nginx $pkgver, useful for building modules"
  depends=()
  install -d "$pkgdir/usr/src"
  cp -r nginx-src "$pkgdir/usr/src/nginx"
}
