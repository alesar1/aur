# $Id$
# Maintainer: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Maintainer: Sébastien Luttringer
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: Miroslaw Szot <mss@czlug.icis.pcz.pl>
# Contributor: Daniel Micay <danielmicay@gmail.com>

pkgname=nginx-pam
_pkgname=nginx
pkgver=1.8.1
pkgrel=1
pkgdesc='Lightweight HTTP server and IMAP/POP3 proxy server with added pam directives'
arch=('i686' 'x86_64')
url='http://nginx.org'
license=('custom')
provides=('nginx')
conflicts=('nginx')
depends=('pcre' 'zlib' 'openssl' 'geoip')
backup=('etc/nginx/fastcgi.conf'
        'etc/nginx/fastcgi_params'
        'etc/nginx/koi-win'
        'etc/nginx/koi-utf'
        'etc/nginx/mime.types'
        'etc/nginx/nginx.conf'
        'etc/nginx/scgi_params'
        'etc/nginx/uwsgi_params'
        'etc/nginx/win-utf'
        'etc/logrotate.d/nginx')
install=nginx.install
source=(https://github.com/stogh/ngx_http_auth_pam_module/archive/v1.4.tar.gz
	$url/download/nginx-$pkgver.tar.gz{,.asc}
        service
        logrotate)
md5sums=('a5c0fb3af7158297c1457739947b9b0c'
         '2e91695074dbdfbf1bcec0ada9fda462'
         'SKIP'
         '80cc5f267dfc737484f653d8b48ac6cd'
         '4ddf076f128cd1738e0c0bba493903bb')
validpgpkeys=('B0F4253373F8F6F510D42178520A9993A1C052F8')


build() {
  cd $_pkgname-$pkgver

  ./configure \
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
    --with-imap \
    --with-imap_ssl_module \
    --with-ipv6 \
    --with-pcre-jit \
    --with-file-aio \
    --with-http_addition_module \
    --with-http_auth_request_module \
    --with-http_dav_module \
    --with-http_degradation_module \
    --with-http_flv_module \
    --with-http_geoip_module \
    --with-http_gunzip_module \
    --with-http_gzip_static_module \
    --with-http_mp4_module \
    --with-http_realip_module \
    --with-http_secure_link_module \
    --with-http_spdy_module \
    --with-http_ssl_module \
    --with-http_stub_status_module \
    --with-http_sub_module \
    --add-module=${srcdir}/ngx_http_auth_pam_module-1.4 \

  make
}

package() {
  cd $_pkgname-$pkgver
  make DESTDIR="$pkgdir" install

  install -Dm644 contrib/vim/ftdetect/nginx.vim \
    "$pkgdir"/usr/share/vim/vimfiles/ftdetect/nginx.vim
  install -Dm644 contrib/vim/syntax/nginx.vim \
    "$pkgdir"/usr/share/vim/vimfiles/syntax/nginx.vim
  install -Dm644 contrib/vim/indent/nginx.vim \
    "$pkgdir"/usr/share/vim/vimfiles/indent/nginx.vim

  sed -e 's|\<user\s\+\w\+;|user html;|g' \
    -e '44s|html|/usr/share/nginx/html|' \
    -e '54s|html|/usr/share/nginx/html|' \
    -i "$pkgdir"/etc/nginx/nginx.conf

  rm "$pkgdir"/etc/nginx/*.default

  install -d "$pkgdir"/var/lib/nginx
  install -dm700 "$pkgdir"/var/lib/nginx/proxy

  chmod 750 "$pkgdir"/var/log/nginx
  chown http:log "$pkgdir"/var/log/nginx

  install -d "$pkgdir"/usr/share/nginx
  mv "$pkgdir"/etc/nginx/html/ "$pkgdir"/usr/share/nginx

  install -Dm644 ../logrotate "$pkgdir"/etc/logrotate.d/nginx
  install -Dm644 ../service "$pkgdir"/usr/lib/systemd/system/nginx.service
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$_pkgname/LICENSE

  rmdir "$pkgdir"/run

  install -d "$pkgdir"/usr/share/man/man8/
  gzip -9c man/nginx.8 > "$pkgdir"/usr/share/man/man8/nginx.8.gz
}

# vim:set ts=2 sw=2 et:
