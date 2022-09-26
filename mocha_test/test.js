import assert from "assert";
import fetch from "node-fetch";

describe("test API", () => {
  it("returned should be array", async () => {
    const res = await fetch("https://nodeapi.pyther.com/customer");
    const data = await res.json();

    assert.equal(typeof data, "object");
  });

  it("returned status should be 200", async () => {
    const res = await fetch("https://nodeapi.pyther.com/customer");

    assert.equal(res.status, "200");
  });

  it("returned array length should be more then 0", async () => {
    const res = await fetch("https://nodeapi.pyther.com/customer");
    const data = await res.json();

    assert.equal(data.length > 0, true);
  });

  it("returned status should be 404", async () => {
    const res = await fetch("https://nodeapi.pyther.com/test");

    assert.equal(res.status, "404");
  });
});
