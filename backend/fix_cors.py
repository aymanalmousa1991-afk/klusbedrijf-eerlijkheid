if "add_middleware" not in c:
    c = c.replace("app = FastAPI()", "app = FastAPI()" + chr(10)*2 + "app.add_middleware(CORSMiddleware, allow_origins=[chr(42)], allow_credentials=True, allow_methods=[chr(42)], allow_headers=[chr(42)])")
    open("server.py", "w").write(c)
    print("CORS toegevoegd")
else: print("CORS bestaat al")
